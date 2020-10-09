module.exports = {
  title: 'Jabra SMILE',
  tagline: 'Documentation platform for Jabra SMILE Voice Analytics - the real time coaching and voice analytics that improves your call center performance. ',
  url: 'https://gndocumentation.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'Jabra SMILE', // Usually your GitHub org/user name.
  projectName: 'documentation_platform', // Usually your repo name.
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
       
        {to: 'docs/doc3', label: 'Tutorial', position: 'left'},
        {to: 'docs/Help', lable: 'Support', position: 'left'}
        
        

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
          title: 'More information',
          items: [
            {
             label: 'Contact',
              to: 'docs/contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Documentation Platform for GN Jabra Voice Analytics, Inc. Built with Docusaurus.`,
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
