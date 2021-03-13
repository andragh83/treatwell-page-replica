import React from 'react';
import styles from './StickyCollapse.module.css';

const RadioInput = ({ onChange, onClick, value }) => (
    <div className={styles.radioInput}>
        <input                          
            name="treatment"                                            
            type="radio" 
            id={value}
            value={value}
            onChange={onChange}
            onClick={onClick} 
        />                    
        {value}
    </div>
)

export default RadioInput;