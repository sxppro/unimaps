import { React, useRef, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import { Box } from '@chakra-ui/react';
import AddEvent from '../AddEvent/AddEvent';
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiamwwMDQ3IiwiYSI6ImNsMXJ5YzE1YTBidWEzY3JsYTd6N3BsaHEifQ.mRkMENCVYX-wSBrOxNQunQ';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(145.135);
  const [lat, setLat] = useState(-37.91);
  const [zoom, setZoom] = useState(13);
  const marker = new mapboxgl.Marker();

  const addMarker = (event) => {
    var coords = event.lngLat;
    console.log(`Lng: ${coords.lng}, Lat: ${coords.lat}`);
    if (map.current) marker.setLngLat(coords).addTo(map.current);
  };

  // Initialise map
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on('click', addMarker);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Store new map lat, lng and zoom
  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <Box p={2} w="100vw" h="100vh" rounded={'lg'}>
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className="map-container"></div>
      <AddEvent />
    </Box>
  );
};

export default Map;
