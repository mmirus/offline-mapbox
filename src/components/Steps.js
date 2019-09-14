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
      <code>gatsby-config.js</code>, specifying an additional file to be
      appended to the generated service worker:
      <pre>
        <code>{`\
{
  resolve: \`gatsby-plugin-offline\`,
  options: {
    appendScript: \`src/serviceworker-mapbox.js\`,
  },
},\
        `}</code>
      </pre>
    </li>
    <li>
      Create <code>src/serviceworker-mapbox.js</code> with the following
      contents:
      <pre>
        <code>{`\
workbox.routing.registerRoute(
  /^https?:\/\/(tiles|api)\.mapbox\.com/,
  new workbox.strategies.NetworkFirst({
    cacheName: "mapbox-cache",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  })
)\
      `}</code>
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
