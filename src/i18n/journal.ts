import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from './index';

export interface Post {
  /** The same in every language: /journal/<slug>/, /fr/journal/<slug>/. */
  slug: string;
  entry: CollectionEntry<'journal'>;
  /** True when the language has no translation yet and the English post stands in. */
  fallback: boolean;
}

/**
 * The journal in one language, newest first. The English posts
 * (src/content/journal/en/) are the list; each language's folder holds
 * their translations under the same file name.
 */
export async function getPosts(locale: Locale): Promise<Post[]> {
  const all = await getCollection('journal');
  const byId = new Map(all.map((p) => [p.id, p]));
  return all
    .filter((p) => p.id.startsWith(`${DEFAULT_LOCALE}/`))
    .map((source) => {
      const slug = source.id.slice(DEFAULT_LOCALE.length + 1);
      const local = byId.get(`${locale}/${slug}`);
      return { slug, entry: local ?? source, fallback: !local && locale !== DEFAULT_LOCALE };
    })
    .sort(
      (a, b) =>
        b.entry.data.date.getTime() - a.entry.data.date.getTime() ||
        a.entry.data.kind.localeCompare(b.entry.data.kind),
    );
}
