import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './map.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWZ6YWxrb2xhIiwiYSI6ImNrZWw5a3gycTBsdWIzNWs3eXlpcDNjM3EifQ.Yrp1LNFxajQ8o06ytfB7eA';

const MapBox = ({ locations }) => {
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      scrollZoom: false,
      container: mapContainerRef.current,
      style: 'mapbox://styles/ifzalkola/ckel9ujox14no1ank0fklzp6m'
    });
    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
      const popup = new mapboxgl.Popup({ offset: 50 }).setText(
        loc.locationName
      );
      // Create marker
      const el = document.createElement('div');
      el.className = 'marker';

      // Add marker
      new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
      })
        .setLngLat(loc.locationPoint.coordinates)
        .setPopup(popup)
        .addTo(map);

      // Extend map bounds to include current location
      bounds.extend(loc.locationPoint.coordinates);
    });
    map.fitBounds(bounds, {
      padding: {
        top: 100,
        bottom: 100
      }
    });
  });
  return (
    <div>
      <div ref={mapContainerRef} className="map-container"></div>
    </div>
  );
};
export default MapBox;
