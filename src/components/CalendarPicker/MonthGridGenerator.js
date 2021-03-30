import React from 'react';
import styles from './CalendarPicker.module.css';

const MonthGridGenerator = ({ firstCell, noOfDays, selectedMonth, year, onClick }) => {    
    const calendar = [];
    let value=firstCell;
    let key = Math.floor(Math.random() * Math.floor(100));
    let today = new Date();

    for (let i = 1; i <= 6; i++) {        
        for (let j = 1; j <= 7; j++) { 
                if (value >= 0 && value < noOfDays) {
                    if ((value < today.getDate()-1 && selectedMonth <= today.getMonth()+1) || (year < today.getFullYear())) {
                        calendar.push(
                            <button 
                                key={key} 
                                className={styles.day + ' ' + styles.pastDates} 
                                // onClick={onClick}
                                value={selectedMonth + '/' + (value+1)}
                                >
                                {value+1}
                            </button>)                 
                    } else {
                        calendar.push(
                            <button 
                                key={key} 
                                className={styles.active} 
                                onClick={onClick}
                                value={selectedMonth + '/' + (value+1)}
                                >
                                {value+1}
                            </button>)
                    }
                                     
                } else if (value < 0) {
                    calendar.push(<button key={key} className={styles.day+ ' ' + styles.notActive}>{noOfDays+value+1}</button>)
                } else {calendar.push(<button key={key} className={styles.day+ ' ' + styles.notActive}>{value-noOfDays+1}</button>)}

                value++;
                key = Math.floor(Math.random() * Math.floor(key*1000));
            }
        } 
    return calendar;
}

export default MonthGridGenerator;