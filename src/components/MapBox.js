import mapboxgl from 'mapbox-gl';
import WeatherCard from './WeatherCard'
import React, {useRef, useEffect, useState} from 'react';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

export const lngLatContext = React.createContext()

function MapBox() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-117.1611);
    const [lat, setLat] = useState(32.7157);
    const [zoom, setZoom] = useState(11);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    // const lngLatContextValue = {
    //     lng: lng,
    //     lat: lat
    // }

    const latLngObj = {
        lat: lat,
        lng: lng
    }


    return (
        // <lngLatContext.Provider value = {lngLatContextValue}>
        <div className="mt-16">

            <div className="flex justify-center">
                <WeatherCard latLng = {latLngObj}/>
            </div>
            <div className="flex row justify-center">
                <div ref={mapContainer} className="map-container"/>
            </div>
        </div>
        // </lngLatContext.Provider>
    );

}

export default MapBox;