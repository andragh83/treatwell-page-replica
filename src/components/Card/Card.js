import React, {useState} from 'react';
import styles from './Card.module.css';

const DropdownInputLocation = () => {

    const [showDetails, setShowDetails] = useState(false)

     return <div className={styles.container}>
                <div>
                    <img src="" alt=''/>
                    <div>
                        <h3>Title</h3>                
                        <p>Rating</p>
                        <p>Locations</p>
                    </div>
                </div>
                <div>
                    <h4>Treatment type</h4>
                    <p>Treatment duration</p>
                </div>
                <button onClick={() => setShowDetails(!showDetails)}>Quick View</button>
                {showDetails && 
                <div>

                </div>}
            </div>
}

export default DropdownInputLocation;