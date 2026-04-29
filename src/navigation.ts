import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '회사',
      i18nKey: 'nav.company.title',
      links: [
        { text: '정체성', href: getPermalink('/company/identity'), i18nKey: 'nav.company.submenu.identity' },
        { text: '연혁', href: getPermalink('/company/mission-history'), i18nKey: 'nav.company.submenu.history' },
        { text: 'CSAIC 팀', href: getPermalink('/tech/csaic-team'), i18nKey: 'nav.company.submenu.csaicTeam' },
        { text: '운영 원칙', href: getPermalink('/company/culture'), i18nKey: 'nav.company.submenu.culture' },
      ],
    },
    {
      text: '솔루션',
      i18nKey: 'nav.solutions.title',
      links: [
        { text: '전체 보기', href: getPermalink('/solutions'), i18nKey: 'nav.solutions.submenu.overview' },
        { text: 'MVI', href: getPermalink('/solutions/mvi'), i18nKey: 'nav.solutions.submenu.mvi' },
        {
          text: 'MetaInsight',
          href: getPermalink('/solutions/metainsight'),
          i18nKey: 'nav.solutions.submenu.metainsight',
        },
        { text: 'DIANA', href: getPermalink('/solutions/diana'), i18nKey: 'nav.solutions.submenu.diana' },
        { text: '전략', href: getPermalink('/solutions/strategy'), i18nKey: 'nav.solutions.submenu.strategy' },
      ],
    },
    {
      text: '기술',
      i18nKey: 'nav.technology.title',
      links: [
        { text: '기술 역량', href: getPermalink('/tech/core-tech'), i18nKey: 'nav.technology.submenu.coreTech' },
        { text: '기술 철학', href: getPermalink('/tech/philosophy'), i18nKey: 'nav.technology.submenu.philosophy' },
        { text: '연구 & IP', href: getPermalink('/research'), i18nKey: 'nav.technology.submenu.research' },
      ],
    },
    { text: '주요 실적', href: getPermalink('/track-record'), i18nKey: 'nav.trackRecord' },
    { text: '문의', href: getPermalink('/contact'), i18nKey: 'nav.contact' },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '솔루션',
      i18nKey: 'footer.sections.solutions',
      links: [
        { text: '전체 보기', href: getPermalink('/solutions'), i18nKey: 'nav.solutions.submenu.overview' },
        { text: 'MVI', href: getPermalink('/solutions/mvi'), i18nKey: 'nav.solutions.submenu.mvi' },
        {
          text: 'MetaInsight',
          href: getPermalink('/solutions/metainsight'),
          i18nKey: 'nav.solutions.submenu.metainsight',
        },
        { text: 'DIANA', href: getPermalink('/solutions/diana'), i18nKey: 'nav.solutions.submenu.diana' },
      ],
    },
    {
      title: '회사',
      i18nKey: 'footer.sections.company',
      links: [
        { text: '정체성', href: getPermalink('/company/identity'), i18nKey: 'nav.company.submenu.identity' },
        { text: '연혁', href: getPermalink('/company/mission-history'), i18nKey: 'nav.company.submenu.history' },
        { text: '주요 실적', href: getPermalink('/track-record'), i18nKey: 'nav.trackRecord' },
      ],
    },
    {
      title: '기술',
      i18nKey: 'footer.sections.technology',
      links: [
        { text: '기술 역량', href: getPermalink('/tech/core-tech'), i18nKey: 'nav.technology.submenu.coreTech' },
        { text: '연구 & IP', href: getPermalink('/research'), i18nKey: 'nav.technology.submenu.research' },
      ],
    },
    {
      title: '문의',
      i18nKey: 'footer.sections.contact',
      links: [
        { text: 'choi@metaintelligence.co.kr', href: 'mailto:choi@metaintelligence.co.kr' },
        { text: '053-719-4290', href: 'tel:+82537194290' },
        { text: '대구, 대한민국', href: getPermalink('/contact'), i18nKey: 'footer.location' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '이용약관', href: getPermalink('/terms'), i18nKey: 'footer.terms' },
    { text: '개인정보처리방침', href: getPermalink('/privacy'), i18nKey: 'footer.privacy' },
  ],
  footNote: `
    <span>&copy; 2026 MetaIntelligence Inc. All rights reserved.</span>
    <span class="block mt-1 text-muted">#401, 4F, 13 Alphacity 1-ro 35-gil, Suseong-gu, Daegu, Republic of Korea</span>
  `,
};
