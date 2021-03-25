import React, { useState, useEffect } from 'react';
import Map from './Map';
import styles from './Map.module.css';
// import InfoWindowContents from './InfoWindowContents';


const MapCard = ( {getSalons, location, salons }) => {

    const [position, setPosition] = useState({lat: 51.507359, lng: -0.136439});
    const [radius, setRadius] = useState('500');    

    const createInfoWindow = (lat, lng, stars, map) => {        
        const infoWindow = new window.google.maps.InfoWindow({
            content: "<div><svg width='64' height='30' xmlns='http://www.w3.org/2000/svg' version='1.1'><g transform='translate(5,2) scale(0.75)'><path fill='#FFB500' fill-rule='evenodd' d='M9.245 28.706C7.6 29.88 5.903 28.647 6.51 26.72l2.492-7.91-6.708-4.936c-1.625-1.196-.992-3.205 1.035-3.205h8.373l2.616-7.955c.633-1.923 2.736-1.908 3.364 0l2.616 7.955h8.373c2.039 0 2.658 2.01 1.035 3.205l-6.708 4.937 2.492 7.91c.607 1.926-1.09 3.16-2.735 1.986L16 23.891l-6.755 4.815z'></path></g><text x='34' y='22' style='font-size: 20px'>" + stars + "</text></svg></div>",
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
                getSalons(results);                   
                salons.map(salon =>                    
                    results.map(result => {                                               
                        if (salon.name === result.name) {
                            createInfoWindow(result.geometry.location.lat(), result.geometry.location.lng(), salon.stars, map)                                                     
                        } 
                    })
                )                                        
                                            
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