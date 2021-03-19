import React from 'react';
import Map from './Map';
import styles from './Map.module.css';
import InfoWindowContents from './InfoWindowContents';


const MapCard = () => {

    const gerCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                console.log('current location: ',pos);
                // codeLatLng(pos.lat, pos.lng);
              },
              () => {
                console.log("error, can't get location")
              }
            );
          }
    }

    const codeLatLng = (lat, lng) => {
        let city = undefined;
        const geocoder = new window.google.maps.Geocoder();
        var latlng = new window.google.maps.LatLng(lat, lng);
        console.log(geocoder, latlng)
        geocoder.geocode({'latLng': latlng}, function(results, status) {
          if (status == window.google.maps.GeocoderStatus.OK) {
          console.log(results)
            if (results[1]) {
             //formatted address
             console.log(results[0].formatted_address)
            //find country name
                 for (var i=0; i<results[0].address_components.length; i++) {
                for (var b=0;b<results[0].address_components[i].types.length;b++) {
    
                //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                    if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                        //this is the object you are looking for
                        city = results[0].address_components[i];
                        break;
                    }
                }
            }
            //city data
            console.log(city.short_name + " " + city.long_name)

            } else {
                console.log("No results found");
            }
          } else {
            console.log("Geocoder failed due to: " + status);
          }
        });
    }

    const createInfoWindow = (lat, lng, name, map) => {
        const infoWindow = new window.google.maps.InfoWindow({
            content: '<div>' + name +'</div>',
            position: {lat: lat,  lng: lng}
        })               
        
        infoWindow.open(map);
    }

    const createSalonMarkers = (map) => {
        const request = {
            location: {lat: 51.507359, lng: -0.136439},
            radius: '500',
            type: [ 'beauty_salon' ]
        };

    const service = new window.google.maps.places.PlacesService(map);

    const callback = (results, status) => {
        if (status == window.google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {  
                console.log('lat: ', results[i].geometry.location.lat(), 'lng: ',results[i].geometry.location.lng())              
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
                center: {
                    lat: 51.507359,
                    lng: -0.136439
                },
                zoom: 14
            }}   

            onMapLoad = {createSalonMarkers}         

            // onMapLoad={(map) => {
            //     createMarker({ lat: 51.503399, lng: -0.119519 }, map);
            //     createMarker({ lat: 51.510357, lng: -0.116773 }, map);

            // }}

            // onMapLoad={
            //     map => {
            //         const request = {
            //             location: {lat: 51.507359, lng: -0.136439},
            //             radius: '500',
            //             type: [ 'beauty_salon' ]
            //         };

            //     const service = new window.google.maps.places.PlacesService(map);
                
            //     service.nearbySearch(request, (results, status) => {
            //         if (status == window.google.maps.places.PlacesServiceStatus.OK) {
            //             for (let i = 0; i < results.length; i++) {  
            //                 console.log('lat: ', results[i].geometry.location.lat(), 'lng: ',results[i].geometry.location.lng())                                          
            //                 const infoWindow = new window.google.maps.InfoWindow({
            //                     content: '<div>' + results[i].name +'</div>',
            //                     position: {lat: results[i].geometry.location.lat(),  lng: results[i].geometry.location.lng()}
            //                 })               
                            
            //                 infoWindow.open(map);                                
            //             }
            //         } else {console.log('Callback said: ', status)}                
            //     })
                
            //     } 

            // }

            //  onMapLoad={map => {                
            //     const infoWindow = new window.google.maps.InfoWindow({
            //             content: '<div>Here!</div>',
            //             position: {lat: 51.503399,  lng: -0.119519}
            //         })               
                    
            //     infoWindow.open(map);
            //     }}

                
            
        /> 
        </div>
}

export default MapCard;