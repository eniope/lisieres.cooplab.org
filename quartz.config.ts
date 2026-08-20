import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz — utopia.cooplab.org
 * Living lab d'enquête située. CARe Robustesse & Soin.
 * Fork de conversations-en-lisieres.collaborations
 */
const config: QuartzConfig = {
  contentDir: "mmw-content",

  configuration: {
    pageTitle: "Lisieres",
    pageTitleSuffix: " · cooplab.org",

    enableSPA: true,
    enablePopovers: true,

    baseUrl: "lisieres.cooplab.org",

    ignorePatterns: ["private", "**/templates/", ".obsidian", "_static"],

    defaultDateType: "published",
    generateSocialImages: false,

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8faf8",       // fond légèrement vert-blanc
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#4A7C59",   // vert sage — couleur signature utopia/CARe
          tertiary: "#7aab8a",
          highlight: "rgba(74, 124, 89, 0.10)",
          textHighlight: "#d4edda88",
        },
        darkMode: {
          light: "#161a17",
          lightgray: "#2e3a31",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7aab8a",
          tertiary: "#4A7C59",
          highlight: "rgba(74, 124, 89, 0.15)",
          textHighlight: "#1a3a2288",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative", openLinksInNewTab: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks(),
    ],

    filters: [
      Plugin.RemoveDrafts(),
    ],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
