import React from "react"

const ICON = `M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z`

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none",
}

export const MarkerIcon = ({ size = 20, onClick }) => (
  <svg
    height={size}
    viewBox="0 0 20 20"
    style={{
      ...pinStyle,
      transform: `translate(${-size / 2}px,${-size}px)`,
    }}
    onClick={onClick}
    role="img"
  >
    <title>Location Marker</title>
    <path d={ICON} />
  </svg>
)
