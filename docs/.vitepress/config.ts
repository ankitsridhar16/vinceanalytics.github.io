import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "The Cloud Native Web Analytics Platform",
  titleTemplate: true,
  title: 'vince',
  ignoreDeadLinks: 'localhostLinks',
  appearance: false,
  lastUpdated: true,
  head: [
    ["meta", { name: "msapplication-TileColor", content: "#bdfcff" }],
    ["meta", { name: "twitter:card", content: "product" }],
    ["meta", { name: "twitter:site", content: "@gernesti" }],
    ["meta", { name: "twitter:title", content: "Vince analytics" }],
    ["meta", { name: "twitter:description", content: "The Cloud Native Web Analytics Platform." }],
    ["meta", { name: "og:title", content: "Vince Analytics" }],
    ["meta", { name: "og:description", content: "The Cloud Native Web Analytics Platform." }],
    ["meta", { name: "og:type", content: "article" }],
    ["link",
      {
        rel: "icon",
        href: "/logo.svg",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vinceanalytics/vince' }
    ],
    footer: {
      message: "Released under the AGPL-3.0 license",
      copyright: "Copyright @ 2023-present Geofrey Ernest"
    }
  }
})

