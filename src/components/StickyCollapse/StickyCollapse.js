import React, {useState, useEffect, useRef} from 'react';
import styles from './StickyCollapse.module.css';
import InputField from './InputField';
import DropdownInputTreatment from './DropdownInputTreatment';
import DropdownInputDate from './DropdownInputDate';
import DropdownInputLocation from './DropdownInputLocation';
import PopularTreatments from './PopularTreatments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faMapMarkerAlt, faCalendarAlt, faMapMarkedAlt, faList } from '@fortawesome/free-solid-svg-icons';

import treatmentTypes from '../../dummyData/treatments';
import locations from '../../dummyData/locations';

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
        getDesiredTime,
        toggleMap,
        toggleCards }) => {

        const [collapsed, setCollapsed] = useState(true);
        const [listIcon , toggleIListIcon] = useState(true);
        const [showInputTreatment, setShowInputTreatment] = useState(false)
        const [showlocationDropdown, setShowLocationDropdown] = useState(false);
        const [showDateDropdown, setShowDateDropdown] = useState(false);
    
        //Hook
        const useWindowSize = () => {
            const isClient = typeof window === 'object'; //Object represents browser window
            const lastWidth = useRef();
        
            function getSize() {
            return {
                width: isClient ? window.innerWidth : undefined
            }
            }
        
            const [windowSize, setWindowSize] = useState(getSize)
        
            useEffect(() => {
            if (!isClient) { return false } //Exit if not user/browser
        
            function handleResize() {
                if (window?.innerWidth !== lastWidth.current) {
                const width = getSize();
                lastWidth.current = width;
                setWindowSize(width)
                }
            }
            window.addEventListener('resize', handleResize) // <-- I am only interested in window.innerWidth !
            return () => window.removeEventListener('resize', handleResize)
            }, []) 
        
            return windowSize
    }

    const viewportWidth = useWindowSize();

    useEffect(() => {        
        viewportWidth.width <= 768 && toggleMap();
    }, [])

 
   const displayDateAndTime = (date, time) => {

    let displayDate = date;
    if (Date.parse(date)) {
        let displayValue = new Date(date);
        let dd = displayValue.getDate();
        let mm = displayValue.getMonth()+1;
        displayDate = dd + '/' + mm;
    }

    if (time.startHour === '') return displayDate;
    return displayDate + ' ' + time.startHour + ' - ' + time.endHour;
    
   }
  
   return <div className={styles.container}>
            <div className={styles.collapsableInputs}>
                <div className={styles.inputsContainer}>
                    {collapsed ?
                        ( <div className={styles.initialInputContainer}>
                            <div className={styles.initialInputField}>
                                <InputField 
                                    icon={faSearch}                            
                                    onClick={() => {setCollapsed(!collapsed); setCollapsed(false)}}
                                    inputMode={"none"}
                                    placeholder={"Search for treatments"}
                                    value={treatment}                            
                                />
                            </div>
                         { viewportWidth.width <= 768
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
                                        treatments={treatmentTypes}
                                        onChange={getTreatment}
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
                                        locations={locations}
                                        onChange={getLocation}
                                        onClick={() => {setShowLocationDropdown(false)}}
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
                                        getDesiredTime={getDesiredTime}                                           
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
            <PopularTreatments treatments={treatmentTypes} onClick={getTreatment}/>
        </div>
}

export default StickyCollapse;