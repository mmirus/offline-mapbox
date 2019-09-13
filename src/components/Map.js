import React, { useState } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import "./map.css"
import { MarkerIcon } from "./MarkerIcon"

const locations = [
  {
    latLng: [42.788568, -73.713045],
    address: "491 Taylor Street, New York, NY 10040",
  },
  {
    latLng: [43.176898, 43.176898],
    address: "814 Hillcrest Street, Lockport, NY 14094",
  },
  {
    latLng: [40.625468, -73.945521],
    address: "8632 N. Parker St., Brooklyn, NY 11210",
  },
  {
    latLng: [40.935603, -73.860568],
    address: "178 Gartner Lane, Yonkers, NY 10701",
  },
  {
    latLng: [40.708253, -73.852248],
    address: "81 E. Walnut Ave., Rego Park, NY 11374",
  },
  {
    latLng: [41.7133205, -73.9295994],
    address: "8589 Washington St., Poughkeepsie, NY 12601",
  },
]

export const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 41.7133205,
    longitude: -73.9295994,
    zoom: 6,
  })

  const [visiblePopupIndex, showPopup] = useState(null)

  return (
    <div
      style={{
        marginBottom: "1.45rem",
      }}
    >
      <ReactMapGL
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_KEY}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        onViewportChange={viewport => setViewport(viewport)}
      >
        {locations.map(({ latLng: [lat, lng], address }, index) => {
          return (
            <React.Fragment key={index}>
              <Marker latitude={lat} longitude={lng}>
                <MarkerIcon size={25} onClick={() => showPopup(index)} />
              </Marker>

              {visiblePopupIndex === index && (
                <Popup
                  latitude={lat}
                  longitude={lng}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => showPopup(null)}
                  anchor="top"
                  style={{
                    willChange: "auto",
                  }}
                >
                  <div style={{ fontSize: "0.8rem" }}>
                    <p style={{ margin: 0 }}>
                      <strong>Demo Location</strong>
                    </p>
                    <p style={{ margin: 0 }}>{address}</p>
                  </div>
                </Popup>
              )}
            </React.Fragment>
          )
        })}
      </ReactMapGL>
    </div>
  )
}
