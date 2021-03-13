import React from 'react';
import styles from './StickyCollapse.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PopulatTreatments = ({ treatments, onClick }) => (
    <div className={styles.popularTreatmentsWrapper}>
        <div className={styles.popularTreatmentsHeadline}>Popular treatments</div>
        <div className={styles.popularTreatmentsContainer}>
        {
            treatments.map((treatment, index) => (
                <button 
                    key={index} 
                    className={styles.popularTreatmentsButton} 
                    onClick={onClick}
                    value={treatment}
                    >
                    <FontAwesomeIcon icon={faSearch} size="lg"/>
                    <div className={styles.popularTreatmentsName}>{treatment}</div>
                </button>
            ))
        }
        </div> 
    </div>
     
)

export default PopulatTreatments;