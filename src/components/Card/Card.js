import React, {useState} from 'react';
import styles from './Card.module.css';

import Carousel from '../Carousel/Carousel';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Card = ({ salon }) => {

    const [showDetails, setShowDetails] = useState(false)

     return <div className={styles.cardContainer}>
                <div className={styles.headerSection}>
                    <Carousel images={salon.images} alt=''/>
                    <div className={styles.headerDetails}>
                        <h3>{salon.name}</h3>                
                        <p><span className={styles.stars}>{salon.stars} stars </span><span>{salon.noReviews}</span> reviews</p>
                        <p>{salon.location}</p>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    {
                        salon.treatmentsOffered.map((treatment, index) => (
                            <div className={styles.treatments} key={index}>
                                <div>
                                    <h4>{treatment.name}</h4>
                                    <p>{treatment.duration}</p>
                                </div>
                                <div className={styles.price}>{treatment.price}</div>
                            </div>
                        ))
                    }    
                </div>     
                <button className={styles.quickViewButton} onClick={() => setShowDetails(!showDetails)}>Quick View venue details</button>
                {showDetails && 
                <div className={styles.venueDetailsContainer}>
                    <div>
                        <ul className={styles.schedule}>
                        { 
                            salon.schedule.map((day, index) => (     
                                <div key={index} className={styles.scheduleDay}>
                                    <li>{weekdays[index]}</li>
                                    <div>{day}</div> 
                                </div>                                                                                                                        
                            ))
                        }
                        </ul>
                    </div>
                    <div className={styles.description}>
                        {salon.description}
                    </div>
                    <div className={styles.goToVenueButtonWrapper}>
                        <button className={styles.goToVenueButton} onClick={() => setShowDetails(!showDetails)}>Go to venue</button>
                    </div>
                </div>}
            </div>
}

export default Card;