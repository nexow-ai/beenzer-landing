/**
 * The languages the site is published in. `code` is the path prefix
 * (/fr/, /zh-cn/); English, the source, lives at the root. `lang` goes into
 * <html lang>, hreflang and the sitemap; `intl` overrides it for dates and
 * numbers where the language's default would clash with the copy (Western
 * digits in Arabic, the Gregorian calendar in Thai).
 *
 * Shared with astro.config.mjs (the sitemap's alternates), so plain data only.
 */
export const LOCALES = [
  { code: 'en', lang: 'en', name: 'English', english: 'English', og: 'en_US' },
  { code: 'es', lang: 'es', name: 'Español', english: 'Spanish', og: 'es_ES' },
  { code: 'fr', lang: 'fr', name: 'Français', english: 'French', og: 'fr_FR' },
  { code: 'de', lang: 'de', name: 'Deutsch', english: 'German', og: 'de_DE' },
  { code: 'it', lang: 'it', name: 'Italiano', english: 'Italian', og: 'it_IT' },
  { code: 'pt', lang: 'pt-BR', name: 'Português', english: 'Portuguese', og: 'pt_BR' },
  { code: 'nl', lang: 'nl', name: 'Nederlands', english: 'Dutch', og: 'nl_NL' },
  { code: 'tr', lang: 'tr', name: 'Türkçe', english: 'Turkish', og: 'tr_TR' },
  { code: 'ru', lang: 'ru', name: 'Русский', english: 'Russian', og: 'ru_RU' },
  { code: 'uk', lang: 'uk', name: 'Українська', english: 'Ukrainian', og: 'uk_UA' },
  { code: 'ar', lang: 'ar', name: 'العربية', english: 'Arabic', og: 'ar_AR', dir: 'rtl', intl: 'ar-u-nu-latn' },
  { code: 'he', lang: 'he', name: 'עברית', english: 'Hebrew', og: 'he_IL', dir: 'rtl' },
  { code: 'hi', lang: 'hi', name: 'हिन्दी', english: 'Hindi', og: 'hi_IN' },
  { code: 'th', lang: 'th', name: 'ไทย', english: 'Thai', og: 'th_TH', intl: 'th-u-ca-gregory' },
  { code: 'vi', lang: 'vi', name: 'Tiếng Việt', english: 'Vietnamese', og: 'vi_VN' },
  { code: 'id', lang: 'id', name: 'Bahasa Indonesia', english: 'Indonesian', og: 'id_ID' },
  { code: 'zh-cn', lang: 'zh-CN', name: '简体中文', english: 'Chinese (Simplified)', og: 'zh_CN' },
  { code: 'zh-tw', lang: 'zh-TW', name: '繁體中文', english: 'Chinese (Traditional)', og: 'zh_TW' },
  { code: 'ja', lang: 'ja', name: '日本語', english: 'Japanese', og: 'ja_JP' },
  { code: 'ko', lang: 'ko', name: '한국어', english: 'Korean', og: 'ko_KR' },
] as const;

export type Locale = (typeof LOCALES)[number]['code'];
export type LocaleInfo = (typeof LOCALES)[number] & { dir?: 'rtl'; intl?: string };

export const DEFAULT_LOCALE: Locale = 'en';
