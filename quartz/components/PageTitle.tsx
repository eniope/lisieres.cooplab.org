import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title

  // Chemin vers la racine du site (compatible GitHub Pages / Cloudflare)
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link">
        <img
          class="site-logo"
          src={`${pathToRoot(fileData.slug!)}/static/Logo.png`}
          alt={title}
        />

      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  text-align: center;
}

.page-title-link {
  display: inline-block;
}

.site-logo {
  max-width: 420px;
  height: auto;
  display: block;
  margin: 2rem auto 1.5rem auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
