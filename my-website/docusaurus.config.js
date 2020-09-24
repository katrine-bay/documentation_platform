module.exports = {
  title: 'Jabra SMILE',
  tagline: 'Documentation platform for Jabra SMILE',
  url: 'https://gndocumentation.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'Jabra SMILE', // Usually your GitHub org/user name.
  projectName: 'Docosaurus_GN_tester', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Jabra SMILE',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'About', label: 'About', position: 'left'},
        //{to: 'blog', label: 'Blog', position: 'left'},
        {to: 'Tutorial', label: 'Tutorial', position: 'left'},
        {to: 'help/', activeBasePath: 'help',label: 'Help', position: 'left'},
        //{//skal muligvis slettes herfra
        //  href: 'https://github.com/facebook/docusaurus', 
        //  label: 'GitHub',
        //  position: 'right',
        //}, //og hertil
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
