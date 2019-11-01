export const theme = {
  colors: {
    base: '#EF542D',
    secondary: '#302DEF',
    tertiary: '#f3f3f3',
    highlight: '#5b8bf7',
  },
  sizes: {
    giant: 1170,
    desktop: 920,
    tablet: 700,
    largePhone: 500,
    phone: 376,
    maxWidth: '1170px',
    maxWidthCentered: '650px',
  },
}

export const sizes = theme.sizes

export const headerLinks = [
  {
    id: 'casestudies',
    name: 'Vitess Case Studies',
    to: '/casestudies',
  },

  {
    id: 'news',
    name: 'News',
    to: '/news',
  },

  {
    id: 'faq',
    name: 'FAQ',
    to: '/faq',
  },

  {
    id: 'docs',
    name: 'Docs',
    to: '/docs/index',
  },
]

export const footerLinks = [
  {
    title: 'Company',
    data: [
      {
        id: 'news',
        name: 'News',
        to: '/news',
      },
      {
        id: 'faq',
        name: 'FAQ',
        to: '/faq',
      },
      {
        id: 'team',
        name: 'About Us',
        to: '/team',
      },
      {
        id: 'careers',
        name: 'Careers',
        to: '/careers',
      },
      {
        id: 'events',
        name: 'Events',
        to: '/events',
      },
      {
        id: 'media',
        name: 'Media Kit',
        to: '/media',
      },
    ],
  },
  {
    title: 'Support',
    data: [
      {
        id: 'support',
        name: 'Submit a Ticket',
        to: '/support',
        external: true,
      },
      {
        id: 'licenses',
        name: 'Licenses',
        to: '/sla/201902sla/',
        external: true,
      },
      {
        id: 'terms',
        name: 'Terms of Service',
        to: '/tos',
      },
      {
        id: 'privacy_policy',
        name: 'Privacy',
        to: '/privacy',
      },
    ],
  },
  {
    title: 'Open Source',
    data: [
      {
        id: 'vitess',
        name: 'Vitess',
        to: 'https://vitess.io',
        external: true,
      },
      {
        id: 'community',
        name: 'Community',
        to:
          'https://join.slack.com/t/vitess/shared_invite/enQtMzIxMDMyMzA0NzA1LTYxMjk2M2M2NjAwNGY0ODljY2E1MjBlZjRkMmZmNDVkZTBhNDUxNzNkOGM4YmEzNWEwOTE2NjJiY2QyZjZjYTE',
        external: true,
      },
      {
        id: 'downloads',
        name: 'Downloads',
        to: 'https://github.com/planetscale/vitess-releases/releases',
        external: true,
      },
    ],
  },
  {
    title: 'Talk To Us',
    data: [
      {
        id: 'phone',
        name: 'Call +1-408-649-9870',
        to: 'tel:1-408-649-9870',
        external: true,
      },
      {
        id: 'contact',
        name: 'Contact Sales',
        to: '/contact',
      },
    ],
  },
]
