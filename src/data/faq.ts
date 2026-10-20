import { SITE } from './site';
import { fill, useLocale, type Locale } from '../i18n';

// The questions and answers are in each language's dictionary (faq.items in
// src/i18n/dict/), from the app's code and plan (nexow-ai/beenzer) and from
// nexow.studio. Nothing there promises a date or a price.

/** For the page. */
export function faq(locale: Locale) {
  const l = useLocale(locale);
  return l.t.faq.items.map((f) => ({ q: f.q, a: l.fill(f.a, { company: SITE.owner.name }) }));
}

/** For search engines: plain text, without the page's direction marks. */
export function faqSchema(locale: Locale) {
  const { t, lang } = useLocale(locale);
  return {
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: t.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: fill(f.a, { company: SITE.owner.name }) },
    })),
  };
}
