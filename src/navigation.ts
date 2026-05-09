import { i18nPair } from './utils/i18n';
import { getPermalink } from './utils/permalinks';

// headerData provides both English and Korean labels so the client
// can toggle language dynamically. Each `text` value is either a
// string or an object: { en: string, ko: string }.
export const headerData = {
  links: [
    {
      text: i18nPair('nav.company.title'),
      links: [
        {
          text: i18nPair('nav.company.submenu.identity'),
          href: getPermalink('/company/identity'),
        },
        {
          text: i18nPair('nav.company.submenu.history'),
          href: getPermalink('/company/mission-history'),
        },
        {
          text: i18nPair('nav.company.submenu.culture'),
          href: getPermalink('/company/culture'),
        },
      ],
    },
    {
      text: i18nPair('nav.technology.title'),
      links: [
        {
          text: i18nPair('nav.technology.submenu.philosophy'),
          href: getPermalink('/tech/philosophy'),
        },
        {
          text: i18nPair('nav.technology.submenu.core_tech'),
          href: getPermalink('/tech/core-tech'),
        },
        {
          text: i18nPair('nav.technology.submenu.csaic_team'),
          href: getPermalink('/tech/csaic-team'),
        },
      ],
    },
    {
      text: i18nPair('nav.solutions.title'),
      links: [
        {
          text: i18nPair('nav.solutions.submenu.strategy'),
          href: getPermalink('/solutions/strategy'),
        },
        {
          text: i18nPair('nav.solutions.submenu.openmv'),
          href: getPermalink('/solutions/openmv'),
        },
        {
          text: i18nPair('nav.solutions.submenu.mvi'),
          href: getPermalink('/solutions/mvi'),
        },
        {
          text: i18nPair('nav.solutions.submenu.ida'),
          href: getPermalink('/solutions/ida'),
        },
      ],
    },
    // {
    //   text: i18nPair('nav.resources.title'),
    //   links: [
    //     {
    //       text: i18nPair('nav.resources.submenu.corporate'),
    //       href: getPermalink('corporate', 'category'),
    //     },
    //     {
    //       text: i18nPair('nav.resources.submenu.case_study'),
    //       href: getPermalink('case-studies', 'category'),
    //     },
    //     {
    //       text: i18nPair('nav.resources.submenu.tech_insight'),
    //       href: getPermalink('tech-insight', 'category'),
    //     },
    //     {
    //       text: i18nPair('nav.resources.submenu.culture_people'),
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
