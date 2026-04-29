import en from '~/i18n/en.json';
import ko from '~/i18n/ko.json';

export const DEFAULT_LOCALE = 'ko';

export const SUPPORTED_LOCALES = [
  { code: 'ko', label: '한국어', shortLabel: 'KR', textDirection: 'ltr' },
  { code: 'en', label: 'English', shortLabel: 'EN', textDirection: 'ltr' },
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number]['code'];
export type Dictionary = typeof ko;

export const dictionaries: Record<Locale, Dictionary> = {
  ko,
  en,
};

export const isLocale = (value: string | undefined): value is Locale =>
  Boolean(value && SUPPORTED_LOCALES.some((locale) => locale.code === value));

export const normalizeLocale = (value?: string): Locale => (isLocale(value) ? value : DEFAULT_LOCALE);

const resolvePath = (source: unknown, key: string): unknown =>
  key.split('.').reduce<unknown>((current, part) => {
    if (current && typeof current === 'object' && part in current) {
      return (current as Record<string, unknown>)[part];
    }

    return undefined;
  }, source);

export const translate = (key: string, locale: string = DEFAULT_LOCALE): string => {
  const safeLocale = normalizeLocale(locale);
  const localized = resolvePath(dictionaries[safeLocale], key);

  if (typeof localized === 'string') {
    return localized;
  }

  const fallback = resolvePath(dictionaries[DEFAULT_LOCALE], key) ?? resolvePath(dictionaries.en, key);

  return typeof fallback === 'string' ? fallback : key;
};

export const createTranslator =
  (locale: string = DEFAULT_LOCALE) =>
  (key: string): string =>
    translate(key, locale);

export const resolveI18nPair = translate;
