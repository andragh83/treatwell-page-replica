import React from 'react';
import styles from './Warning.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';



const Warning = ({closeWarning}) => (
    <div className={styles.container}>
        <div className={styles.content}>
            <button className='closeWarning' onClick={closeWarning}>
                <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
            </button>
            <div className={styles.warningTextTitle}>
                This is a practice project
            </div>
            <div className={styles.warningTextDescription}>
                <p>It replicates the design and some functionalities of a small part of the <a href='https://www.treatwell.co.uk/places/treatment-balayage'>Treatwell website</a>.</p>
                <p>It is built with React, manages state with Redux, is styled with CSS-modules and uses the Google Maps API.</p>
                <p>Present features of this website include:</p>
                <ul> 
                    <li>A dummy navigation for design purposes</li>
                    <li>A sticky collapsable working search form that matches the selected choices to a dummy data base and displays them on the map.</li>
                    <li>The search form includes a 'built from scratch' calendar picker.</li>
                    <li>The salon cards have a carousel of images.</li>
                    <li>The website is responsive to a wide range of devices.</li>
                </ul> 
                <p>The map component doesn't load in this demo because I haven't yet set-up the backend in order to secure the API key. If you have your own Google Maps API key, you can download the repo, create an .env file in the root of the project that holds a sigle variable called REACT_APP_GOOGLE_API_KEY="your API key goes here" and run it locally.</p>                               
            </div>
        </div>
    </div>
)

export default Warning;