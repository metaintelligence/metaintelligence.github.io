import { resolveI18nPair } from './utils/i18n';
import { getPermalink } from './utils/permalinks';

// headerData provides both English and Korean labels so the client
// can toggle language dynamically. Each `text` value is either a
// string or an object: { en: string, ko: string }.
export const headerData = {
  links: [
    {
      text: resolveI18nPair('nav.company.title') || 'Company',
      links: [
        {
          text: resolveI18nPair('nav.company.submenu.identity') || 'Identity & Values',
          href: getPermalink('/company/identity'),
        },
        {
          text: resolveI18nPair('nav.company.submenu.history') || 'Mission & Milestone',
          href: getPermalink('/company/mission-history'),
        },
        {
          text: resolveI18nPair('nav.company.submenu.culture') || 'Work Culture',
          href: getPermalink('/company/culture'),
        },
      ],
    },
    {
      text: resolveI18nPair('nav.technology.title') || 'Technology',
      links: [
        {
          text: resolveI18nPair('nav.technology.submenu.philosophy') || 'Tech Philosophy',
          href: getPermalink('/tech/philosophy'),
        },
        {
          text: resolveI18nPair('nav.technology.submenu.core_tech') || 'Core Capabilities',
          href: getPermalink('/tech/core-tech'),
        },
        {
          text: resolveI18nPair('nav.technology.submenu.csaic_team') || 'CSAIC Team',
          href: getPermalink('/tech/csaic-team'),
        },
      ],
    },
    {
      text: resolveI18nPair('nav.solutions.title') || 'Solutions',
      links: [
        {
          text: resolveI18nPair('nav.solutions.submenu.strategy') || 'Business Strategy',
          href: getPermalink('/solutions/strategy'),
        },
        {
          text: resolveI18nPair('nav.solutions.submenu.openmv') || 'OpenMV',
          href: getPermalink('/solutions/openmv'),
        },
        {
          text: resolveI18nPair('nav.solutions.submenu.mvi') || 'Vision AI (MVI)',
          href: getPermalink('/solutions/mvi'),
        },
        {
          text: resolveI18nPair('nav.solutions.submenu.ida') || 'Document AI (IDA)',
          href: getPermalink('/solutions/ida'),
        },
      ],
    },
    // {
    //   text: resolveI18nPair('nav.resources.title') || 'Resources',
    //   links: [
    //     {
    //       text: resolveI18nPair('nav.resources.submenu.corporate') || 'Corporate News',
    //       href: getPermalink('corporate', 'category'),
    //     },
    //     {
    //       text: resolveI18nPair('nav.resources.submenu.case_study') || 'Case Studies',
    //       href: getPermalink('case-studies', 'category'),
    //     },
    //     {
    //       text: resolveI18nPair('nav.resources.submenu.tech_insight') || 'Tech Insight',
    //       href: getPermalink('tech-insight', 'category'),
    //     },
    //     {
    //       text: resolveI18nPair('nav.resources.submenu.culture_people') || 'Culture & People',
    //       href: getPermalink('culture', 'category'),
    //     },
    //   ],
    // },
  ],
  actions: [],
};
// Footer sitemap mirrors the header navigation structure with English-only
// labels. The header swaps between ko/en via the i18n toggle, but the footer
// stays in English to match common corporate-site conventions. To switch to
// a contact-centric footer later, replace this array; the Footer component
// itself can be reused without changes.
const footerSitemap: Array<{ title: string; links: Array<{ text: string; href: string }> }> = [
  {
    title: 'Company',
    links: [
      { text: 'Identity & Values', href: getPermalink('/company/identity') },
      { text: 'Mission & Milestone', href: getPermalink('/company/mission-history') },
      { text: 'Work Culture', href: getPermalink('/company/culture') },
    ],
  },
  {
    title: 'Technology',
    links: [
      { text: 'Tech Philosophy', href: getPermalink('/tech/philosophy') },
      { text: 'Core Capabilities', href: getPermalink('/tech/core-tech') },
      { text: 'CSAIC Team', href: getPermalink('/tech/csaic-team') },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { text: 'Business Strategy', href: getPermalink('/solutions/strategy') },
      { text: 'OpenMV', href: getPermalink('/solutions/openmv') },
      { text: 'Vision AI (MVI)', href: getPermalink('/solutions/mvi') },
      { text: 'Document AI (IDA)', href: getPermalink('/solutions/ida') },
    ],
  },
  // {
  //   title: 'Resources',
  //   links: [
  //     { text: 'Corporate News', href: getPermalink('corporate', 'category') },
  //     { text: 'Case Studies', href: getPermalink('case-studies', 'category') },
  //     { text: 'Tech Insight', href: getPermalink('tech-insight', 'category') },
  //     { text: 'Culture & People', href: getPermalink('culture', 'category') },
  //   ],
  // },
];

export const footerData = {
  links: footerSitemap,
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // Re-enable once official social channels are finalized; move desired entries into the socialLinks array.
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  // footNote: `
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  // `,
};
