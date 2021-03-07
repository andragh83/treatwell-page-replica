import React, { useState } from 'react';
import styles from './StickyCollapse.module.css';

const DropdownTime = ({ onChange }) => {
    let list = [];
    for (let i=0; i<=24; i++) {
        list.push(i<10? '0'+i +':00' : i + ':00') 
    }

    let [startHour, setStartHour] = useState('08:00');
    let [endHour, setEndHour] = useState('20:00');

    return <React.Fragment> 
                <div>      
                    <p>From</p>                        
                    <select id="startingHour" defaultValue={list[8]} className={styles.chooseButton} onChange={(e)=>setStartHour(e.target.value)}>                
                        {list.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                <div>  
                    <p>To</p>
                    <select id="endingHour" defaultValue={list[20]} className={styles.chooseButton} onChange={(e)=>setEndHour(e.target.value)}>                
                        {list.map((item, index) => <option key={index} value={item} >{item}</option>)}
                    </select>
                </div>
          </React.Fragment>
}

export default DropdownTime;