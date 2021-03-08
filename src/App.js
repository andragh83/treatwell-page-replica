import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Layout from './components/Layout/Layout';
import StickyCollapse from './components/StickyCollapse/StickyCollapse.js';
import MapCard from './components/Map/MapCard';
import Card from './components/Card/Card';

import { setTreatment, setLocation, setDesiredDate, setDesiredStartHour, setDesiredEndHour, setHideMap } from './actions';

const mapStateToProps = state => {
	return {
        treatment: state.treatment,
        location: state.location,
        desiredDate: state.desiredDate,
        desiredTime: state.desiredTime,
        hideMap: state.hideMap
	}
}

const mapDispatchToProps = (dispatch) => {
	return {        
        getTreatment: (event) => dispatch(setTreatment(event.target.value)),
        getLocation: (event) => dispatch(setLocation(event.target.value)),
        getDesiredDate: (event) => dispatch(setDesiredDate(event.target.value)),
        getDesiredStartHour: (event) => dispatch(setDesiredStartHour(event.target.value)),
        getDesiredEndHour: (event) => dispatch(setDesiredEndHour(event.target.value)),
        toggleMap: () => dispatch(setHideMap())
	}
}

function App(
  { 
    treatment, 
    getTreatment, 
    location, 
    getLocation, 
    desiredDate,        
    getDesiredDate, 
    desiredTime,
    getDesiredStartHour,
    getDesiredEndHour,
    hideMap,
    toggleMap }
) {

  console.log('desired treatment: ', treatment);
  console.log('desired location: ', location);
  console.log('desired date: ', desiredDate);
  console.log('desired time: ', desiredTime);
  console.log('hide map: ', hideMap);


  return (
    <div className="App">
      <Layout>
        <StickyCollapse 
          treatment={treatment} 
          getTreatment={getTreatment}
          location={location} 
          getLocation={getLocation}  
          desiredDate={desiredDate}       
          getDesiredDate={getDesiredDate} 
          desiredTime={desiredTime} 
          getDesiredStartHour={getDesiredStartHour} 
          getDesiredEndHour={getDesiredEndHour}
          toggleMap={toggleMap}
        />
        <div className="Content">
          <Card />
          {
            !hideMap && <MapCard />
          }
        </div>
        
      </Layout>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
