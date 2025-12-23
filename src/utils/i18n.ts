/* All source code comments are in English */
import koData from '~/i18n/ko.json';
import enData from '~/i18n/en.json';

/**
 * Resolves a translation string.
 * If locale is not provided, it falls back to 'ko'.
 */
export const resolveI18nPair = (key: string, locale?: string): string => {
  // 1. Determine the effective locale (default to 'ko' if undefined)
  const lang = locale || 'ko';
  const data = lang === 'en' ? enData : koData;

  // 2. Navigate through the JSON object
  const result = key.split('.').reduce((obj, i) => obj?.[i], data);

  // 3. Handle object results (e.g. {en: "...", ko: "..."})
  // and return the correct string for the current language
  if (typeof result === 'object' && result !== null) {
    return result[lang] || result['en'] || key;
  }

  return (result as string) || key;
};
