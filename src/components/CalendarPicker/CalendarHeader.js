import React from 'react';
import styles from './CalendarPicker.module.css';

const CalendarHeader = ({ month, year, onClickLeft, onClickRight }) => (
    <div>
        <div className={styles.arrowDiv}>    
            <button className={styles.arrow} onClick={onClickLeft}>
                &lt;
            </button>    
            <div className={styles.monthAndYear}>{month + ' ' + year}</div>        
            <button className={styles.arrow} onClick={onClickRight}>
                &gt;
            </button>
        </div>
        <div className={styles.weekDaysDiv}>
            <div className={styles.weekDays}>{'Mon'}</div>
            <div className={styles.weekDays}>{'Tue'}</div>
            <div className={styles.weekDays}>{'Wen'}</div>
            <div className={styles.weekDays}>{'Thu'}</div>
            <div className={styles.weekDays}>{'Fri'}</div>
            <div className={styles.weekDays}>{'Sat'}</div>
            <div className={styles.weekDays}>{'Sun'}</div>
        </div>
    </div>
)

export default CalendarHeader;