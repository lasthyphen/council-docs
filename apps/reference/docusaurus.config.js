// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('@kiwicopple/prism-react-renderer/themes/vsDark')
const darkCodeTheme = require('@kiwicopple/prism-react-renderer/themes/vsDark')
const mainNavbar = require('./nav/_referenceNavbar')
const mdxMermaid = require('mdx-mermaid')

const baseUrl = '/docs/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dijets Council Hub',
  tagline: 'The open source Firebase alternative.',
  url: 'http://127.0.0.1',
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/favicon.ico',
  themes: ['docusaurus-theme-search-typesense'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'supabase', // Usually your GitHub org/user name.
  projectName: 'supabase.tools', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '_api',
        path: '_api',
        routeBasePath: '/reference/api',
        sidebarPath: require.resolve('./nav/api_sidebars.js'),
        breadcrumbs: false,
        editUrl:
          'https://github.com/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '_cli',
        path: '_cli',
        routeBasePath: '/reference/cli',
        sidebarPath: require.resolve('./nav/cli_sidebars.js'),
        breadcrumbs: false,
        editUrl:
          'https://github.com/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '_gotrue',
        path: '_gotrue',
        routeBasePath: '/reference/auth',
        sidebarPath: require.resolve('./nav/gotrue_sidebars.js'),
        breadcrumbs: false,
        editUrl:
          'https://github.com/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '_storage',
        path: '_storage',
        routeBasePath: '/reference/storage',
        sidebarPath: require.resolve('./nav/storage_sidebars.js'),
        breadcrumbs: false,
        editUrl:
          'https://github.com/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '_supabase_dart',
        path: '_supabase_dart',
        routeBasePath: '/reference/dart',
        sidebarPath: require.resolve('./nav/supabase_dart_sidebars.js'),
        breadcrumbs: false,
        editUrl:
          'https://github.com/',
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v1',
          },
          v0: {
            label: 'v0',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: '_supabase_js',
        path: '_supabase_js',
        routeBasePath: '/reference/javascript',
        sidebarPath: require.resolve('./nav/supabase_js_sidebars.js'),
        breadcrumbs: false,
        editUrl:
          'https://github.com/',
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v2',
          },
          v1: {
            label: 'v1',
          },
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./nav/_referenceSidebars.js'),
          breadcrumbs: false,
          editUrl:
            'https://github.com/',
          //remarkPlugins: [mdxMermaid.default],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        // title: 'Supabase Docs',
        logo: {
          alt: 'Dijets Council Docs',
          href: 'https://council.dijets.io',
          target: '_self',
          src: '/img/supabase-logo-wordmark--light.svg',
          srcDark: '/img/supabase-logo-wordmark--dark.svg',
        },
        items: mainNavbar.buildNavbar({ baseUrl }),
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Dijets Inc.`,
      },
      prism: {
        additionalLanguages: ['dart'],
        plugins: ['line-numbers', 'show-language'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      typesense: {
        typesenseCollectionName: 'dijets', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

        typesenseServerConfig: {
          nodes: [
            {
              host: 'doc-search.supabase.com',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 't0HAJQy4KtcMk3aYGnm8ONqab2oAysJz',
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.md#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },
    }),
  scripts: [{ src: '/docs/scripts/telemetry.js' }],
}

module.exports = config
