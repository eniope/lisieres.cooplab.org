import { QuartzComponent, QuartzComponentProps } from "./types"

const LinksHeader: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="links-header">
      <a class="links-header-item" href="/billets/">Billets</a>
      <a class="links-header-item" href="/dossiers/">Dossiers</a>
      <a class="links-header-item" href="/pages-/a-propos">À propos</a>
      <a class="links-header-item" href="/pages-/abonnement">Abonnement</a>
    </nav>
  )
}

export default (() => LinksHeader)
