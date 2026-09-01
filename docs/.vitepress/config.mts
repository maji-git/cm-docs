import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "CM.gd",
  description: "CM.gd Documentation",
  appearance: 'dark',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  sitemap: {
    hostname: 'https://cmgd.dev/'
  },
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Start Here 🚀',
        items: [
          { text: 'Getting Started', link: '/start-here/getting-started/index' },
          { text: 'Player Spawning', link: '/start-here/player-spawning/index' },
          { text: 'Start Script', link: '/start-here/start-script/index' },
        ],
        collapsed: false
      },
      {
        text: 'General',
        items: [
          { text: 'How it works', link: '/general/how-it-works/index' },
          { text: 'Player Management', link: '/general/player-management/index' },
          { text: 'User Inputs', link: '/general/user-inputs' },
          { text: 'Remote Procedure Calls', link: '/general/rpcs' },
        ],
        collapsed: false
      },
      {
        text: 'Transports',
        items: [
          { text: 'Godot Builtins', link: '/transports/godot-builtins' },
          { text: 'Custom Transports', link: '/transports/custom' },
        ],
        collapsed: false
      },
      {
        text: 'Examples',
        items: [
          { text: 'Circular Pong', link: '/examples/pong/index' },
        ],
        collapsed: false
      },
      {
        text: 'Help!!',
        link: '/help/index',
      },
      {
        text: 'Roadmap',
        link: '/roadmap/index',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maji-git/cm-gd' },
      { icon: 'discord', link: 'https://discord.gg/KrqmuQzxKK' },
      { icon: 'kofi', link: 'https://ko-fi.com/kunmawji' },
    ],

    search: {
      provider: 'local'
    },

  }
})
