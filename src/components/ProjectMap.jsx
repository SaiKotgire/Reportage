
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { toast } from 'sonner';

const ProjectMap = ({ location }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token) => {
    if (!mapContainer.current || !token) return;

    // Initialize map with the provided token
    mapboxgl.accessToken = token;
    
    try {
      const coordinates = location?.coordinates || [55.2708, 25.2048]; // Default to Dubai coordinates
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: coordinates,
        zoom: 14,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker at the location
      new mapboxgl.Marker({
        color: "#eab308"
      })
        .setLngLat(coordinates)
        .addTo(map.current);

      // If map loads successfully, hide token input
      map.current.on('load', () => {
        setShowTokenInput(false);
        localStorage.setItem('mapbox_token', token);
      });

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        if (e.error && e.error.status === 401) {
          toast.error('Invalid Mapbox token. Please try again.');
          setShowTokenInput(true);
        }
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      toast.error('Failed to initialize map. Please try again.');
      setShowTokenInput(true);
    }
  };

  const handleTokenSubmit = (e) => {
    e.preventDefault();
    if (mapboxToken) {
      // Clean up any existing map instance
      if (map.current) map.current.remove();
      
      initializeMap(mapboxToken);
    }
  };

  useEffect(() => {
    // Check for token in localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
      initializeMap(savedToken);
    }

    return () => {
      if (map.current) map.current.remove();
    };
  }, []);

  useEffect(() => {
    // If location changes and we have a token, reinitialize map
    if (location && mapboxToken && !showTokenInput) {
      if (map.current) map.current.remove();
      initializeMap(mapboxToken);
    }
  }, [location]);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      {showTokenInput ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 p-8">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Mapbox API Key Required</h3>
            <p className="mb-4 text-gray-600">
              To view the interactive map, please enter your Mapbox public token. 
              You can get one for free at <a href="https://mapbox.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">mapbox.com</a>.
            </p>
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <div>
                <label htmlFor="mapbox-token" className="block text-sm font-medium text-gray-700 mb-1">
                  Mapbox Public Token
                </label>
                <input
                  id="mapbox-token"
                  type="text"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="pk.eyJ1Ijoie3VzZXJuYW1lfSIsImEiOiJ..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-black text-white rounded-md hover:bg-opacity-80 transition-all duration-300"
              >
                Initialize Map
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div ref={mapContainer} className="absolute inset-0" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/10 rounded-lg" />
          <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-md shadow-md">
            <p className="font-medium text-sm">Interactive Map</p>
            <p className="text-xs text-gray-500">Drag to explore the area</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectMap;
