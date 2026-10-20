import { SITE } from './site';
import { fill, useLocale, type Locale } from '../i18n';

// The questions and answers are in each language's dictionary (faq.items in
// src/i18n/dict/), from the app's code and plan (nexow-ai/beenzer) and from
// nexow.studio. Nothing there promises a date or a price.
export function faq(locale: Locale) {
  return useLocale(locale).t.faq.items.map((f) => ({ q: f.q, a: fill(f.a, { company: SITE.owner.name }) }));
}

export function faqSchema(locale: Locale) {
  return {
    '@type': 'FAQPage',
    inLanguage: useLocale(locale).lang,
    mainEntity: faq(locale).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
