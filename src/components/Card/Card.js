import React, {useState} from 'react';
import styles from './Card.module.css';

const DropdownInputLocation = () => {

    const [showDetails, setShowDetails] = useState(false)

     return <div className={styles.container}>
                <div>
                    <img src="https://cdn1.treatwell.net/images/view/v2.i1480952.w1080.h720.x4285767E/" alt='' width="100px"/>
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