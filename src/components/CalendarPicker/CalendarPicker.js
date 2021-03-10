import React, { useState } from 'react';
import styles from './CalendarPicker.module.css';
import CalendarWrapper from './CalendarWrapper';
import CalendarHeader from './CalendarHeader';
import MonthGridGenerator from './MonthGridGenerator';

const CalendarPicker = ({ onClick }) => {

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    
    const daysInAMonth = ( month, year ) => {        
        const monthsOf31 = [1, 3, 5, 7, 8, 10, 12];
        const monthsOf30 = [4, 6, 9, 11];
        if (month !== 2 && monthsOf31.includes(month)) {
            return 31;
        } else if (month !== 2 && monthsOf30.includes(month)) {
            return 30;
        } else if (month === 2 && year%4 === 0 && year%100 !== 0) {
            return 29
        } else {
            return 28
        }
    }

    let today = new Date();
    let lastDayOfCurrentMonth = daysInAMonth(today.getMonth()+1, today.getFullYear());

    const [calendarInput, setCalendarInput] = useState({
                                                month: today.getMonth()+1, 
                                                year: today.getFullYear(),
                                                firstCalendarCell: (today.getDate()%7-today.getDay()),
                                                noOfDays: lastDayOfCurrentMonth
                                            });                                     
    
    const onClickLeft = () => {
        if (calendarInput.month===1) {
            return setCalendarInput({
                ...calendarInput, 
                month: 12, 
                year: calendarInput.year-1,
                firstCalendarCell: 0 - (7 - (daysInAMonth(12, calendarInput.year-1) + calendarInput.firstCalendarCell)%7)%7,
                noOfDays: daysInAMonth(12, calendarInput.year-1)
            });
        }
        
        
        return setCalendarInput({
                ...calendarInput, 
                month: calendarInput.month-1,
                firstCalendarCell: 0 - (7 - (daysInAMonth(calendarInput.month-1, calendarInput.year) + calendarInput.firstCalendarCell)%7)%7,
                noOfDays: daysInAMonth(calendarInput.month-1, calendarInput.year)
            });
    }

    const onClickRight = () => {        
        if (calendarInput.month===12) {
            return setCalendarInput({
                ...calendarInput, 
                month: 1, 
                year: calendarInput.year+1,
                firstCalendarCell: ((35 - (calendarInput.noOfDays - calendarInput.firstCalendarCell))-7)%7,
                noOfDays: daysInAMonth(1, calendarInput.year+1)
            });
        }

        return setCalendarInput({
            ...calendarInput, 
            month: calendarInput.month+1,             
            firstCalendarCell: ((35 - (calendarInput.noOfDays - calendarInput.firstCalendarCell))-7)%7,
            noOfDays: daysInAMonth(calendarInput.month+1, calendarInput.year)
        });
    }

    return <CalendarWrapper>
        <CalendarHeader 
            month={monthNames[calendarInput.month-1]} 
            year={calendarInput.year} 
            onClickLeft={onClickLeft} 
            onClickRight={onClickRight}

            />
        <div className={styles.gridWrapper}>
            <MonthGridGenerator 
                firstCell = {calendarInput.firstCalendarCell}
                noOfDays={calendarInput.noOfDays}  
                selectedMonth={calendarInput.month} 
                onClick={onClick}/>
        </div>
        
    </CalendarWrapper>
}

export default CalendarPicker;