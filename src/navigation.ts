import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Company',
      links: [
        { text: 'Identity', href: getPermalink('/company/identity') },
        { text: 'Milestones', href: getPermalink('/company/mission-history') },
        { text: 'CSAIC Team', href: getPermalink('/tech/csaic-team') },
        { text: 'Operating Principles', href: getPermalink('/company/culture') },
      ],
    },
    {
      text: 'Solutions',
      links: [
        { text: 'MVI', href: getPermalink('/solutions/mvi') },
        { text: 'MetaInsight', href: getPermalink('/solutions/metainsight') },
        { text: 'DIANA', href: getPermalink('/solutions/diana') },
        { text: 'Strategy', href: getPermalink('/solutions/strategy') },
      ],
    },
    {
      text: 'Technology',
      links: [
        { text: 'Core Capabilities', href: getPermalink('/tech/core-tech') },
        { text: 'Technology Philosophy', href: getPermalink('/tech/philosophy') },
        { text: 'Research & IP', href: getPermalink('/research') },
      ],
    },
    { text: 'Track Record', href: getPermalink('/track-record') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'MVI', href: getPermalink('/solutions/mvi') },
        { text: 'MetaInsight', href: getPermalink('/solutions/metainsight') },
        { text: 'DIANA', href: getPermalink('/solutions/diana') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Identity', href: getPermalink('/company/identity') },
        { text: 'Milestones', href: getPermalink('/company/mission-history') },
        { text: 'Track Record', href: getPermalink('/track-record') },
      ],
    },
    {
      title: 'Technology',
      links: [
        { text: 'Core Capabilities', href: getPermalink('/tech/core-tech') },
        { text: 'Research & IP', href: getPermalink('/research') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'choi@metaintelligence.co.kr', href: 'mailto:choi@metaintelligence.co.kr' },
        { text: '053-719-4290', href: 'tel:+82537194290' },
        { text: 'Daegu, Republic of Korea', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  footNote: `
    <span>&copy; 2026 MetaIntelligence Inc. All rights reserved.</span>
    <span class="block mt-1 text-muted">#401, 4F, 13 Alphacity 1-ro 35-gil, Suseong-gu, Daegu, Republic of Korea</span>
  `,
};
