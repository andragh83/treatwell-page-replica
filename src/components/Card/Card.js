import React, {useState} from 'react';
import styles from './Card.module.css';

const DropdownInputLocation = () => {

    const [showDetails, setShowDetails] = useState(false)

     return <div className={styles.cardContainer}>
                <div className={styles.headerSection}>
                    <img src="https://cdn1.treatwell.net/images/view/v2.i1399201.w1080.h720.x9578B420/" alt=''/>
                    <div className={styles.headerDetails}>
                        <h3>Salon name</h3>                
                        <p><span className={styles.stars}>Stars </span><span>No. of reviews</span></p>
                        <p>Locations</p>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.treatments}>
                        <div>
                            <h4>Treatment type</h4>
                            <p>Treatment duration</p>
                        </div>
                        <div className={styles.price}>Price</div>
                    </div>
                    <div className={styles.treatments}>
                        <div>
                            <h4>Treatment type</h4>
                            <p>Treatment duration</p>
                        </div>
                        <div className={styles.price}>Price</div>
                    </div>
                    <div className={styles.treatments}>
                        <div>
                            <h4>Treatment type</h4>
                            <p>Treatment duration</p>
                        </div>
                        <div className={styles.price}>Price</div>
                    </div>
                </div>     
                <button className={styles.quickViewButton} onClick={() => setShowDetails(!showDetails)}>Quick View venue details</button>
                {showDetails && 
                <div>
                    <div className={styles.venueDetailsContainer}>
                        <ul className={styles.schedule}>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <button className={styles.goToVenueButton} onClick={() => setShowDetails(!showDetails)}>Go to venue</button>
                </div>}
            </div>
}

export default DropdownInputLocation;