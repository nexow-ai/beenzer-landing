/**
 * Languages: which one a page is in, its strings, and the paths and formats
 * that go with it. English sits at the root (/journal/); every other
 * language under its code (/fr/journal/, /zh-cn/journal/).
 */
import { DEFAULT_LOCALE, LOCALES, type Locale, type LocaleInfo } from './locales';
import type { Dict } from './dict/en';
import en from './dict/en';

export { DEFAULT_LOCALE, LOCALES, type Locale, type LocaleInfo };
export type { Dict };

// One file per language in ./dict, each typed against English's Dict. A
// build without one of them fails; `astro dev` shows English in its place.
const modules = import.meta.glob<{ default: Dict }>('./dict/*.ts', { eager: true });
const DICTS = Object.fromEntries(
  LOCALES.map(({ code }) => {
    const dict = modules[`./dict/${code}.ts`]?.default;
    if (!dict && import.meta.env.PROD) throw new Error(`No dictionary for "${code}" in src/i18n/dict/`);
    return [code, dict ?? en];
  }),
) as Record<Locale, Dict>;

const CODES = new Set<string>(LOCALES.map((l) => l.code));

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && CODES.has(value);
}

export function localeInfo(locale: Locale): LocaleInfo {
  return LOCALES.find((l) => l.code === locale)!;
}

/** The language of a path: its first segment if that is a language code, English otherwise. */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split('/')[1];
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

/** "/fr/journal/x/" → "/journal/x/". */
export function unlocalizePath(pathname: string): string {
  const first = pathname.split('/')[1];
  if (!isLocale(first) || first === DEFAULT_LOCALE) return pathname;
  return pathname.slice(first.length + 1) || '/';
}

/** "/journal/" in French → "/fr/journal/"; "/#faq" → "/fr/#faq". External links pass through. */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || locale === DEFAULT_LOCALE) return path;
  return `/${locale}${path}`;
}

/** getStaticPaths for a page that exists in every language: lang is undefined for English. */
export function localeParams() {
  return LOCALES.map((l) => ({
    params: { lang: l.code === DEFAULT_LOCALE ? undefined : l.code },
    props: { locale: l.code as Locale },
  }));
}

/** Replace {name} in a string. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * A string with the dictionary's markup, as HTML for set:html: [label](key)
 * links to links[key] (in a new tab when it leaves the site), **x** strong,
 * *x* emphasis, ==x== the brand gradient. Everything else is escaped.
 */
export function rich(
  text: string,
  links: Record<string, string> = {},
  { linkClass = 'link' }: { linkClass?: string } = {},
): string {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(([\w-]+)\)/g, (_, label: string, key: string) => {
      const href = links[key];
      if (!href) throw new Error(`rich(): no link "${key}" for "${text}"`);
      const external = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';
      const cls = linkClass ? ` class="${linkClass}"` : '';
      return `<a${cls} href="${escapeHtml(href)}"${external}>${label}</a>`;
    })
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/==(.+?)==/g, '<span class="grad-text">$1</span>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

/** Everything a page or component needs for its language. */
export function useLocale(source: URL | Locale) {
  const locale = typeof source === 'string' ? source : localeFromPath(source.pathname);
  const info = localeInfo(locale);
  const intl = info.intl ?? info.lang;
  return {
    locale,
    info,
    lang: info.lang,
    dir: info.dir ?? 'ltr',
    t: DICTS[locale],
    path: (p: string) => localizePath(p, locale),
    date: (d: Date, options: Intl.DateTimeFormatOptions) =>
      new Intl.DateTimeFormat(intl, { timeZone: 'UTC', ...options }).format(d),
    number: (n: number, options?: Intl.NumberFormatOptions) => new Intl.NumberFormat(intl, options).format(n),
    /** "24 km", "2 h", "12 min", in the language's own short form. */
    unit: (n: number, unit: 'kilometer' | 'hour' | 'minute', display: 'short' | 'narrow' = 'short') =>
      new Intl.NumberFormat(intl, { style: 'unit', unit, unitDisplay: display, maximumFractionDigits: 1 }).format(n),
    /** A country's name from its ISO code. */
    country: (code: string) => new Intl.DisplayNames([intl], { type: 'region' }).of(code) ?? code,
  };
}

export type LocaleContext = ReturnType<typeof useLocale>;
