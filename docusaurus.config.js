/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Welcome to the Shared Backpack",
  tagline: "Group Travelling Software",
  url: "https://sharedbackpack.github.io",
  baseUrl: "/sharedbackpack-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "TheSharedBackpack", // Usually your GitHub org/user name.
  projectName: "The-Shared-Backpack-docs", // Usually your repo name.
  onBrokenLinks: "ignore",
  themeConfig: {
    logo: {
      alt: "The Shared Backpack Logo",
      src: "img/logo-main.png",
    },
    navbar: {
      title: "The Shared BackPack",
      logo: {
        alt: "The Shared Backpack Logo",
        src: "img/logos/logo-200x200.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/The-Shared-Backpack",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://join.slack.com/t/thesharedbackpack/shared_invite/zt-pce62vf4-EGFS3vbmAuJlBCAyAdTEJg",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/The-Shared-Backpack",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Shared Backpack. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/The-Shared-Backpack/Shared-Backpack-docs/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/The-Shared-Backpack/Shared-Backpack-docs/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
