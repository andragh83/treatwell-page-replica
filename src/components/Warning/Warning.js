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
                <p>This website replicates the design and some functionalities of a small part of the <a href='https://www.treatwell.co.uk/places/treatment-balayage'>Treatwell website</a>.</p>
                <p>It is built with React and Redux and styled with CSS-modules.</p>
                <p>The map component doesn't load because I haven't yet set-up the backend in order to secure the API key.</p>
                <p>Present functionalities include:</p>
                <ul>
                    <li>fgejrfre</li>
                    <li>hfjbejkgbe</li>
                    <li>fesbgsergs</li>
                </ul>                
            </div>
        </div>
    </div>
)

export default Warning;