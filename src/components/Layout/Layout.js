import React from 'react';
import styles from './Layout.module.css';
import NavBar from './NavBar';

const Layout = ({ children }) => (
    <div className={styles.container}>
    <NavBar />
        {children}
    </div>
)

export default Layout;