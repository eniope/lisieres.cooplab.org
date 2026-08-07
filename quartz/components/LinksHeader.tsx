import { QuartzComponent, QuartzComponentProps } from "./types"

const LinksHeader: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="links-header">
      <a class="links-header-item" href="/billets/">Billets</a>
    </nav>
  )
}

export default (() => LinksHeader)
