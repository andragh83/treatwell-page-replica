import React from 'react';
import Map from './Map';
import icon from '../../img/logo512.png';
import styles from './Map.module.css';
// import InfoWindow from './InfoWindow';


const MapCard = () => {

    const createInfoWindow = (position, map) => {
        const infoWindow = new window.google.maps.InfoWindow({
            content: '<div>Salon!</div>',
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

    const createSalonMarkers = (map) => {
        const request = {
            location: new window.google.maps.LatLng(51.507359,-0.136439),
            radius: '500',
            type: ['beauty-salon']
        };

    const service = new window.google.maps.places.PlacesService(map);
    
    service.nearbySearch(request, callback);
    }
    
    const callback = (results, status) => {
        if (status == window.google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
            // createMarker(results[i]);
            console.log('callback result', results[i])
            }
        } else {console.log('Callback said: ', status)}
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

            // onMapLoad={(map) => {
            //     createMarker({ lat: 51.503399, lng: -0.119519 }, map);
            //     createMarker({ lat: 51.510357, lng: -0.116773 }, map);

            // }}

            onMapLoad={createSalonMarkers}
            
        /> 
        </div>
}

export default MapCard;