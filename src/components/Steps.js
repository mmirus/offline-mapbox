import React from "react"
import "./steps.css"

export const Steps = () => (
  <ol className="steps">
    <li>
      Create a new Gatsby site:
      <pre>
        <code>gatsby new offline-mapbox</code>
      </pre>
    </li>
    <li>
      Install <code>gatsby-plugin-offline</code> and <code>react-map-gl</code>,
      Uber's React components for Mapbox GL JS:
      <pre>
        <code>yarn add gatsby-plugin-offline react-map-gl</code>
      </pre>
    </li>
    <li>
      Add <code>gatsby-plugin-offline</code> to the list of plugins in{" "}
      <code>gatsby-config.js</code>:
      <pre>
        <code>plugins: [`gatsby-plugin-offline`]</code>
      </pre>
    </li>
    <li>
      Add your public Mapbox API token to your environment variables (e.g., in
      your Netlify settings)
    </li>
    <li>
      Create your map component (see <code>Map.js</code>
      in the repo)
    </li>
  </ol>
)
