import React from 'react';
import styles from './StickyCollapse.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = ({ icon, placeholder, onClick, value }) => (
    <div className={styles.search}>
        <div className={styles.searchIcon}>
            <FontAwesomeIcon icon={icon} size="lg"/>
        </div>
        <input 
            className={styles.searchInput} 
            readOnly
            onClick={onClick}
            inputMode={"none"}
            placeholder={placeholder}
            value={value}
        />
    </div>
)

export default InputField;