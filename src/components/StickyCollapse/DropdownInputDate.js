import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './StickyCollapse.module.css';
import DropdownWrapper from './DropdownWrapper';
import DropdownTime from './DropdownTime';

const DropdownInputDate = ({ getDesiredDate, desiredTime, getDesiredStartHour, getDesiredEndHour, hideDateOptions }) => {
    
    let today = new Date();

    const [showTimeDropdown, setShowTimeDropdown] = useState(false);

    return <DropdownWrapper>
            <div className={styles.dropDownHeader}>
                <FontAwesomeIcon className={styles.dropDownIcon} icon={faCalendarAlt} size="lg"/>
                Choose Date
            </div>
            <div className={styles.choose}>                                    
                <button
                    className={styles.chooseButton}
                    onClick={getDesiredDate}
                    value={"Any date"}
                >
                    Any Date
                </button>
                <button
                    className={styles.chooseButton}
                    onClick={getDesiredDate}
                    value={new Date()}
                >
                    Today
                </button>
                <button
                    className={styles.chooseButton}
                    onClick={getDesiredDate}
                    value={new Date(today.setDate(today.getDate() + 1))}
                >
                    Tomorrow
                </button>
                <button
                    className={styles.chooseButton}
                    onClick={getDesiredDate}
                    value={"Choose date"}
                >
                    Choose Date
                </button>
            </div>

            <div className={styles.dropDownHeader}>
                <FontAwesomeIcon className={styles.dropDownIcon} icon={faClock} size="lg"/>
                Choose Time
            </div>

            <div className={styles.choose}>                                    
                <button
                    className={styles.chooseButton}
                    onClick={() => {getDesiredStartHour(); getDesiredEndHour()}}
                    value={desiredTime}
                >
                    Any time
                </button>
                <button
                    className={styles.chooseButton}
                    onClick={() => setShowTimeDropdown(true)}
                    value={"Choose time"}
                >
                    Choose Time
                </button>
                {
                    showTimeDropdown && <DropdownTime onChangeStartHour={getDesiredStartHour} onChangeEndHour={getDesiredEndHour}/>
                }
            </div>
            <button
                className={styles.hideDropDownInput}
                onClick={hideDateOptions}
            >
                Done
            </button>
        </DropdownWrapper>
}

export default DropdownInputDate;