import React from "react"
import { Map } from "../components/Map"
import { Steps } from "../components/Steps"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Offline Mapbox Test" />
    <h1>Hi people</h1>
    <p>
      This is a test of setting up a PWA with Gatsby that allows a Mapbox
      instance to be used offline.
    </p>
    <Map />
    <h2>Steps</h2>
    <p>
      View source code:{" "}
      <a href="https://github.com/mmirus/offline-mapbox">
        https://github.com/mmirus/offline-mapbox
      </a>
    </p>
    <Steps />
  </Layout>
)

export default IndexPage
