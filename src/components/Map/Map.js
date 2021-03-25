import React, { useEffect, useRef } from 'react';
import styles from './Map.module.css';


const Map = ({ options, onMapLoad, children }) => {

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
    }, [])

    return <div ref = {mapRef} className={styles.mapWrapper} >
            {children}
          </div> 

}             

export default Map;