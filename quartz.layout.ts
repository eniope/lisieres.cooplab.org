import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// =================================================
// GRAPH CONFIG (MMW)
// =================================================

const tagsToRemove = ["graph-exclude"]

const graphConfig = {
  localGraph: {
    removeTags: tagsToRemove,
    excludeTags: tagsToRemove,
  },
  globalGraph: {
    removeTags: tagsToRemove,
    excludeTags: tagsToRemove,
  },
}

// =================================================
// SHARED COMPONENTS
// =================================================

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  header: [
    Component.LinksHeader(),
  ],

  afterBody: [],

  footer: Component.Footer({
    links: {
      "cooplab.org": "https://cooplab.org",
      "these": "https://these.cooplab.org",
      "CC BY-SA": "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  }),
}

// =================================================
// LAYOUT — PAGE DE CONTENU
// =================================================

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents2()),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
  ],

  right: [
    Component.MobileOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
    Component.DesktopOnly(Component.Graph(graphConfig)),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// =================================================
// LAYOUT — PAGE LISTE
// =================================================

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.MobileOnly(Component.TableOfContents2()),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
  ],

  right: [
    Component.MobileOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
    Component.DesktopOnly(Component.Graph(graphConfig)),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
