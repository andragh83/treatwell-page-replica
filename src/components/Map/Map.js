import React, { useEffect, useRef } from 'react';
import styles from './Map.module.css';
import { Loader } from "@googlemaps/js-api-loader"

// loading map (manually)
const Map = ({ options, id, onMapLoad, changeFactors}) => {

    const mapRef = useRef();

    const createMap = () => {
        const map = new window.google.maps.Map(mapRef.current, options);
        onMapLoad(map);
      }  

    useEffect(() => {
        if (!window.google) {
            const mapScriptTag = document.createElement('script');
            mapScriptTag.type = 'text/javascript';
            mapScriptTag.async = true;
            mapScriptTag.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`;
            window.document.body.appendChild(mapScriptTag);
            mapScriptTag.addEventListener('load', () => {
              createMap()
            })
          } else {
            createMap()
          }
    }, changeFactors)

    return <div id={id} ref = {mapRef} className={styles.mapWrapper} />

}             

export default Map;

//loading map (package)

// const Map = ({ options, id, onMapLoad, salons, coloredTooltip}) => {

//     const mapRef = useRef();

//     const loader = new Loader({
//       apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//       version: "weekly", 
//       libraries: ["places"]   
//     });

//     useEffect(() => {
//       loader.load().then(() => {
//         const map = new window.google.maps.Map(mapRef.current, options);
//         onMapLoad(map)
//       });
//     }, [salons.length, coloredTooltip])

//     return <div id={id} ref = {mapRef} className={styles.mapWrapper} />

// }             

// export default Map;

