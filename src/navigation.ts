import { resolveI18nPair } from './utils/i18n';
import { getPermalink, getAsset } from './utils/permalinks';

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
    {
      text: resolveI18nPair('nav.resources.title') || 'Resources',
      links: [
        {
          text: resolveI18nPair('nav.resources.submenu.corporate') || 'Corporate News',
          href: getPermalink('corporate', 'category'),
        },
        {
          text: resolveI18nPair('nav.resources.submenu.case_study') || 'Case Studies',
          href: getPermalink('case-studies', 'category'),
        },
        {
          text: resolveI18nPair('nav.resources.submenu.tech_insight') || 'Tech Insight',
          href: getPermalink('tech-insight', 'category'),
        },
        {
          text: resolveI18nPair('nav.resources.submenu.culture_people') || 'Culture & People',
          href: getPermalink('culture', 'category'),
        },
      ],
    },
  ],
  actions: [
    {
      text: resolveI18nPair('header.download') || 'Download',
      href: getPermalink('/contact'),
      target: '_self',
    },
  ],
};
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
