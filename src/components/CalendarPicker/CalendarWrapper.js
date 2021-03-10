import React from 'react';
import styles from './CalendarPicker.module.css';

const CalendarWrapper = ({ children }) => (
    <div className={styles.calendarWrapper}>
        { children }
    </div>
)

export default CalendarWrapper;