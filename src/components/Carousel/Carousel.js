import React, { useState }  from 'react';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images }) => {
    
    const [position, setPosition] = useState(0);
    let image = images.filter((image, index) => index === position);
    return <div className={styles.carouselWrapper}>    
                    <img className={styles.img} src={image[0]} alt=""/>                                
                <div className={styles.carouselControls}>
                    <button className={styles.arrow} onClick={() => {position === 0 ? setPosition(images.length-1) : setPosition(position-1)}}>
                        <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
                    </button>                                       
                    <button className={styles.arrow} onClick={() => {position === images.length-1 ? setPosition(0) : setPosition(position+1)}}>
                        <FontAwesomeIcon icon={faChevronRight} size="2x"/>
                    </button>
                </div>
                <div style={{marginLeft: '10px'}}>
                    <div className={styles.bullets}>
                        {images.map((image, index) => (
                            index===position ? <div key={index} className={styles.activeBullet}/> : <div key={index} className={styles.bullet}/> 
                        ))} 
                    </div>  
                </div>              
            </div>  
}

export default Carousel;