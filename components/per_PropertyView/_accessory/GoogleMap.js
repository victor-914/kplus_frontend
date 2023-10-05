import StyledGoogle from "./GoogleMap.styles";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_KEY;

function GoogleMap({ detail }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(3.406448);
  const [lat, setLat] = useState(6.465422);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    setLng(detail?.data?.attributes?.longitude || 3.406448);
    setLat(detail?.data?.attributes?.latitude || 6.465422);
    return () => {};
  }, [detail]);

  useEffect(() => {
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    return () => {};
  });

  return (
    <StyledGoogle>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </StyledGoogle>
  );
}

export default GoogleMap;
