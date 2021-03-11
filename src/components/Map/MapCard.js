import React from 'react';
import Map from './Map';
import icon from '../../img/logo512.png';
import styles from './Map.module.css';
// import InfoWindow from './InfoWindow';


const MapCard = () => {

    const createInfoWindow = (position, map) => {
        const infoWindow = new window.google.maps.InfoWindow({
            content: '<div id="infoWindow" />',
            position: position
        })
        
        infoWindow.open(map)
      }

    const createMarker = (position, map) => {
        new window.google.maps.Marker({
            position: position,
            map: map,
            title: 'Hello London!',
            icon: icon,
        });       
        
        createInfoWindow(position, map)        
    }

    return <div className={styles.mapWrapper}>                
        <Map
            id={'map'}            
            zoom={14}            
            options={{
                center: {
                    lat: 51.507359,
                    lng: -0.136439
                },
                zoom: 14
            }}

            // onMapLoad={map => {
            //     const marker = new window.google.maps.Marker({
            //         position: {lat: 51.503399,  lng: -0.119519},
            //         map: map,
            //         title: 'Hello London!'
            //     });
            //     marker.addListener('click', e => {
            //         createInfoWindow(e, map)
            //     })
            // }}

            onMapLoad={(map) => {
                createMarker({ lat: 51.503399, lng: -0.119519 }, map);
                createMarker({ lat: 51.510357, lng: -0.116773 }, map);

            }}

            
        /> 
        </div>
}

export default MapCard;