import React from 'react';
import styles from './StickyCollapse.module.css';

const DropdownWrapper = ({ children }) => (
    <div className={styles.dropDownInput}>
        { children }
    </div>
)

export default DropdownWrapper;