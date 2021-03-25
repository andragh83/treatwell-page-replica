import React from 'react';
import styles from './Map.module.css';

const InfoWindowContents = ( { name } ) => (
        <div className={styles.infoWindow}>
            <h3>{name}</h3>
        </div>
    )

export default InfoWindowContents;