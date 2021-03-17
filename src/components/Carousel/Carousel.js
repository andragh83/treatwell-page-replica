import React, { useState, useEffect, useRef }  from 'react';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images }) => {
    
    const [position, setPosition] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const widthRef=useRef();

    useEffect(() => {
        setImageWidth(widthRef.current.offsetWidth)
    }, [])

    return <div ref={widthRef} className={styles.carouselWrapper}>
                <div className={styles.imgGallery}>
                    <div className={styles.imgContainer}>
                        {images.map((image, index) => (                            
                            <div key={index} className={styles.imgWrapper} style={{transform: 'translateX(' + (index-position)*imageWidth+'px)'}}>
                                <div className={styles.imgItem}>                                    
                                    <img className={styles.img} src={image} alt=""/>                                    
                                </div>
                            </div>                            
                        ))}                     
                    </div> 
                    <div className={styles.carouselControls}>
                        <button className={styles.arrow} onClick={() => {position === 0 ? setPosition(images.length-1) : setPosition(position-1)}}>
                            <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
                        </button>                                       
                        <button className={styles.arrow} onClick={() => {position === images.length-1 ? setPosition(0) : setPosition(position+1)}}>
                            <FontAwesomeIcon icon={faChevronRight} size="2x"/>
                        </button>
                    </div>
                    <div className={styles.bulletsContainer}>
                        <div className={styles.bullets}>
                            {images.map((image, index) => (
                                index===position ? <div key={index} className={styles.activeBullet}/> : <div key={index} className={styles.bullet}/> 
                            ))} 
                        </div>  
                    </div>                                                                                 
                </div>         
            </div>  
}

export default Carousel;