import React from 'react';
import styles from './Map.module.css';

const InfoWindowContents = ( { name } ) => {
       return <div className={styles.infoWindow}>
            <h3>Name</h3>
        </div>
    }

export default InfoWindowContents;