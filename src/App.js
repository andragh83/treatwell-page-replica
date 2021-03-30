import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Layout from './components/Layout/Layout';
import StickyCollapse from './components/StickyCollapse/StickyCollapse.js';
import MapCard from './components/Map/MapCard';
import Card from './components/Card/Card';
import Warning from './components/Warning/Warning';
import salons from './dummyData/salons';

import { setTreatment, setLocation, setDesiredDate, setDesiredStartHour, setDesiredEndHour, setDesiredTime, setHideMap, setShowCards, setFoundSalons} from './actions';

const mapStateToProps = state => {
	return {
        treatment: state.searchTreatment.treatment,
        location: state.searchTreatment.location,
        desiredDate: state.searchTreatment.desiredDate,
        desiredTime: state.searchTreatment.desiredTime,
        hideMap: state.searchTreatment.hideMap,
        showCards: state.searchTreatment.showCards,        
        foundSalons: state.displayOnMap.foundSalons        
	}
}

const mapDispatchToProps = (dispatch) => {
	return {        
        getTreatment: (event) => dispatch(setTreatment(event.currentTarget.value)),
        getLocation: (event) => dispatch(setLocation(event.target.value)),
        getDesiredDate: (event) => dispatch(setDesiredDate(event.target.value)),
        getDesiredStartHour: (event) => dispatch(setDesiredStartHour(event.target.value)),
        getDesiredEndHour: (event) => dispatch(setDesiredEndHour(event.target.value)),
        getDesiredTime: (event) => dispatch(setDesiredTime(event.target.value)),
        toggleMap: () => dispatch(setHideMap()),
        toggleCards: () => dispatch(setShowCards()),
        getSalonsFromMap: (results) => dispatch(setFoundSalons(results))
	}
}

function App(props) {

  const { 
    treatment, 
    getTreatment, 
    location, 
    getLocation, 
    desiredDate,        
    getDesiredDate, 
    desiredTime,
    getDesiredStartHour,
    getDesiredEndHour,
    getDesiredTime,
    hideMap,
    toggleMap,
    showCards,
    toggleCards,
    getSalonsFromMap,
    foundSalons     
  } = props;

  // debugger;  

  const salonNames = foundSalons.map(salon => salon.name)
  console.log('saloane: ', Object.keys(salonNames));

  var filteredSalons;

  if (salonNames.length>0) {
    filteredSalons = salons.filter(
      salon => salon.treatmentsOffered.some(
        treatments => treatments.name.includes(treatment) && salon.location.includes(location) && salonNames.includes(salon.name)
        )
      )
  } else {
    filteredSalons = salons.filter(
      salon => salon.treatmentsOffered.some(
        treatments => treatments.name.includes(treatment) && salon.location.includes(location)
        )
      )
  }

  


  let filteredSalonslength  = filteredSalons.length

  const [showWarning, toggleWarning] = useState(true);

  return (
    <div className="App">
      {showWarning && <Warning closeWarning = {()=>toggleWarning(!showWarning)} /> }
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
          getDesiredTime={getDesiredTime}
          toggleMap={toggleMap}
          toggleCards={toggleCards}
        />
        <div className="Results">{filteredSalons.length} salons offer {treatment} in {location}.</div>
        <div className="Content">          
          <div className="Cards">
          {
            showCards && filteredSalons.map((salon, index) => <Card salon={salon} key={index}/>)
          }
          </div>
          {
            !hideMap && <MapCard getSalons={getSalonsFromMap} salons={filteredSalons} changeFactors={[filteredSalonslength, treatment, location]}/>
          }
        </div>    

      </Layout>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
