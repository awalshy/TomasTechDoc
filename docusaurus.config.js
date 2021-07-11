const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TOMAS For Developpers',
  tagline: 'TOMAS Technical Documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TOMAS', // Usually your GitHub org/user name.
  projectName: 'techdoc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TOMAS For Developpers',
      logo: {
        alt: 'TOMAS Logo',
        src: 'img/icon_head_512.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'family-app/summary',
          position: 'left',
          label: 'Family App'
        },
        {
          type: 'doc',
          docId: 'senior-app/summary',
          position: 'left',
          label: 'Senior App'
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://gitlab.com/tomas70/tomas',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Family App',
              to: '/docs/family-app/summary',
            },
            {
              label: 'Senior App',
              to: '/docs/senior-app/summary'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: '',
            // },
            // {
            //   label: 'Discord',
            //   href: '',
            // },
            // {
            //   label: 'Twitter',
            //   href: '',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitLab',
              href: 'https://gitlab.com/tomas70/tomas',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TOMAS`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
