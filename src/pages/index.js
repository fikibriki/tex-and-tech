import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Seo title="Work in progress" />
    <h1>This website is currently in construction.</h1>
    <StaticImage
      src="../images/tex and tech-logos_transparent.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Tex And Tech Logo"
      style={{ marginBottom: `1.45rem`, justifyContent: 'center' }}
    />
  </Layout>
)

export default IndexPage
