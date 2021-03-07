import React, {useState} from 'react';
import styles from './StickyCollapse.module.css';
import InputField from './InputField';
import DropdownInputTreatment from './DropdownInputTreatment';
import DropdownInputDate from './DropdownInputDate';
import DropdownInputLocation from './DropdownInputLocation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const StickyCollapse = ({ 
        treatment, 
        getTreatment, 
        location, 
        getLocation, 
        desiredDate,        
        getDesiredDate, 
        desiredTime,
        getDesiredTime,
        hideMap }) => {

   const [showOneInput, setShowOneInput] = useState(true);
   const [showInputTreatment, setShowInputTreatment] = useState(false)
   const [showlocationDropdown, setShowLocationDropdown] = useState(false);
   const [showDateDropdown, setShowDateDropdown] = useState(false);
 
   const displayDate = (date) => {
    if (Date.parse(date)) {
        let displayValue = new Date(date);
        let dd = displayValue.getDate();
        let mm = displayValue.getMonth()+1;
        return dd + '/' + mm
    } else return date;
    
   }

   return <div className={styles.container}>
            <div className={styles.collapsableInputs}>

                <div className={styles.inputsContainer}>
                    {showOneInput ?
                        <InputField 
                            icon={faSearch}                            
                            onClick={() => {setShowOneInput(!showOneInput); setShowOneInput(false)}}
                            inputMode={"none"}
                            placeholder={"Search for treatments"}
                            value={treatment}
                        />
                        :                        
                        <div>

                            <React.Fragment>
                                <InputField 
                                    icon={faSearch}                                    
                                    onClick={() => {setShowInputTreatment(true)}}
                                    inputMode={"none"}
                                    placeholder={"Search for treatments"}
                                    value={treatment}
                                />                                                        
                                {showInputTreatment && 
                                    <DropdownInputTreatment
                                        treatment={treatment}
                                        getTreatment={getTreatment}
                                        onClick={() => {setShowInputTreatment(false)}}
                                    />
                                    }
                            </React.Fragment>
                            
                            <React.Fragment> 
                                <InputField 
                                        icon={faMapMarkerAlt}
                                        onClick={() => setShowLocationDropdown(!showlocationDropdown)}                                        
                                        placeholder={"Search for location"}
                                        value={location}
                                    />                            
                                {showlocationDropdown && 
                                    <DropdownInputLocation
                                        location={location}
                                        getLocation={getLocation} 
                                    />}
                            </React.Fragment>

                            <React.Fragment>
                                <InputField 
                                    icon={faCalendarAlt}                                    
                                    onClick={() => setShowDateDropdown(!showDateDropdown)}                                                    
                                    inputMode={"none"}
                                    placeholder={"Any Date"}
                                    value={displayDate(desiredDate)}
                                />
                                { showDateDropdown && 
                                    <DropdownInputDate
                                        // desiredDate={desiredDate}        
                                        getDesiredDate={getDesiredDate}
                                        desiredTime={desiredTime}
                                        getDesiredTime={getDesiredTime}                                             
                                        hideDateOptions={() => setShowDateDropdown(false)}
                                    />}
                            </React.Fragment>
                        </div>
                        }                        
                </div>

                <div className={styles.label}>{"Balayage"}</div>

                <div className={styles.hideMap}>                    
                    <button onClick={hideMap}>
                    <FontAwesomeIcon className={styles.hideMapIcon} icon={faTimes} size="lg"/>
                    Hide Map
                    </button>
                </div>

            </div>
        </div>
}

export default StickyCollapse;