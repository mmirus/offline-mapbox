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
)
