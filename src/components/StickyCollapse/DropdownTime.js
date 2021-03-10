import React from 'react';
import styles from './StickyCollapse.module.css';

const DropdownTime = ({ onChangeStartHour, onChangeEndHour }) => {
    let list = [];
    for (let i=0; i<=24; i++) {
        list.push(i<10? '0'+i +':00' : i + ':00') 
    }

    return <React.Fragment> 
                <div>      
                    <p>From</p>                        
                    <select id="startingHour" defaultValue={list[8]} className={styles.chooseButton} onChange={onChangeStartHour}>                
                        {list.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                <div>  
                    <p>To</p>
                    <select id="endingHour" defaultValue={list[20]} className={styles.chooseButton} onChange={onChangeEndHour}>                
                        {list.map((item, index) => <option key={index} value={item} >{item}</option>)}
                    </select>
                </div>
          </React.Fragment>
}

export default DropdownTime;