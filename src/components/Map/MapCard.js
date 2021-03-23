import React, { useState } from 'react';
import Map from './Map';
import styles from './Map.module.css';
// import InfoWindowContents from './InfoWindowContents';


const MapCard = ( {getSalons, location }) => {

    const [position, setPosition] = useState({lat: 51.507359, lng: -0.136439});
    const [radius, setRadius] = useState('500');    

    const createInfoWindow = (lat, lng, name, map) => {        
        const infoWindow = new window.google.maps.InfoWindow({
            content: "<div>" + name + "</div>",
            position: {lat: lat,  lng: lng}
        })               
        
        infoWindow.open(map);        
    }

    const createSalonMarkers = (map) => {
        const request = {
            location: position,
            radius: radius,
            type: [ 'beauty_salon' ]
        };

    const service = new window.google.maps.places.PlacesService(map);

    const callback = (results, status) => {
        if (status == window.google.maps.places.PlacesServiceStatus.OK) {            
            for (let i = 0; i < results.length; i++) {                  
                createInfoWindow(results[i].geometry.location.lat(), results[i].geometry.location.lng(), results[i].name, map);                 
            }            
        } else {console.log('Callback said: ', status)}        
            
    }
    
    service.nearbySearch(request, callback);

    }
    

    return <div className={styles.mapWrapper}>                
            <Map
                id={'map'}            
                zoom={14}            
                options={{
                    center: position,
                    zoom: 14
                }}   
            

                onMapLoad = {createSalonMarkers}                         
            /> 
        </div>
}

export default MapCard;