import React, {useState, useEffect} from 'react';
import styles from './StickyCollapse.module.css';
import InputField from './InputField';
import DropdownInputTreatment from './DropdownInputTreatment';
import DropdownInputDate from './DropdownInputDate';
import DropdownInputLocation from './DropdownInputLocation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faMapMarkerAlt, faCalendarAlt, faMapMarkedAlt, faList } from '@fortawesome/free-solid-svg-icons';

const StickyCollapse = ({ 
        treatment, 
        getTreatment, 
        location, 
        getLocation, 
        desiredDate,        
        getDesiredDate, 
        desiredTime,
        getDesiredStartHour,
        getDesiredEndHour,
        toggleMap,
        toggleCards }) => {

   const [showOneInput, setShowOneInput] = useState(true);
   const [listIcon , toggleIListIcon] = useState(true);
   const [showInputTreatment, setShowInputTreatment] = useState(false)
   const [showlocationDropdown, setShowLocationDropdown] = useState(false);
   const [showDateDropdown, setShowDateDropdown] = useState(false);
   const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    
    const handleResize = () => {
        setViewportWidth(window.innerWidth);
        console.log('viewport: ', viewportWidth)
        viewportWidth < 420 && toggleMap();
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])

 
   const displayDateAndTime = (date, time) => {
       console.log('date in fct is: ', date);
       console.log('time in fct is: ', time);

        let displayDate = '';
        if (Date.parse(date)) {
            let displayValue = new Date(date);
            let dd = displayValue.getDate();
            let mm = displayValue.getMonth()+1;
            displayDate = dd + '/' + mm;
        } else {displayDate = date};
    return displayDate + ' between ' + time.startHour + ' and ' + time.endHour;
   }

   return <div className={styles.container}>
            <div className={styles.collapsableInputs}>

                <div className={styles.inputsContainer}>
                    {showOneInput ?
                        ( <div className={styles.initialInputContainer}>
                            <div className={styles.initialInputField}>
                                <InputField 
                                    icon={faSearch}                            
                                    onClick={() => {setShowOneInput(!showOneInput); setShowOneInput(false)}}
                                    inputMode={"none"}
                                    placeholder={"Search for treatments"}
                                    value={treatment}                            
                                />
                            </div>
                         { viewportWidth < 420 
                              && <div>
                                    <button className={styles.initialInputButton} onClick={() => {toggleCards(); toggleIListIcon(!listIcon); return !toggleMap()}}>
                                        { listIcon ? 
                                            <FontAwesomeIcon icon={faMapMarkedAlt} size="lg"/>
                                            :
                                            <FontAwesomeIcon icon={faList} size="lg"/>
                                            }
                                    </button>                            
                                </div> }
                        </div> )
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
                                    value={displayDateAndTime(desiredDate, desiredTime)}
                                />
                                { showDateDropdown && 
                                    <DropdownInputDate
                                        // desiredDate={desiredDate} 
                                        desiredTime = {desiredTime}       
                                        getDesiredDate={getDesiredDate}                                        
                                        getDesiredStartHour={getDesiredStartHour} 
                                        getDesiredEndHour={getDesiredEndHour}                                            
                                        hideDateOptions={() => setShowDateDropdown(false)}
                                    />}
                            </React.Fragment>
                        </div>
                        }                        
                </div>

                <div className={styles.label}>{treatment}</div>

                <div className={styles.hideMap}>                    
                    <button onClick={toggleMap}>
                    <FontAwesomeIcon className={styles.hideMapIcon} icon={faTimes} size="lg"/>
                    Hide Map
                    </button>
                </div>

            </div>
        </div>
}

export default StickyCollapse;