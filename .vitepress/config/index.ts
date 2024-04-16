import { defineConfig } from 'vitepress'

import { en, search as enSearch } from './locales/en'
import { fr, search as frSearch } from './locales/fr'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  srcDir: './src',
  outDir: './.vitepress/build',

  title: 'Docs',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        sizes: 'any',
        href: '/docs/images/icon.svg',
      },
    ],
    ['meta', { name: 'theme-color', content: '#0071BC' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'fr' }],
    ['meta', { property: 'og:title', content: 'Docs | Documentation' }],
    ['meta', { property: 'og:site_name', content: 'Docs' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/images/icon.svg',
      dark: '/images/icon-reverse.svg',
      alt: 'Docs',
      width: 48,
      height: 48,
    },

    search: {
      provider: 'local',
      options: {
        ...frSearch?.fr,
        locales: {
          ...enSearch,
        },
      },
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z" fill="currentColor"></path></svg>',
        },
        link: 'https://edpage.net',
      },
    ],
  },
  locales: {
    root: { label: 'Français', ...fr },
    en: { label: 'English', ...en },
  },
})
