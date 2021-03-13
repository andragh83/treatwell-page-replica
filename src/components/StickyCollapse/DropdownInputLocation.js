import React  from 'react';
// import styles from './StickyCollapse.module.css';
import DropdownWrapper from './DropdownWrapper';
import RadioInput from './RadioInput';

const DropdownInputLocation = ({ locations, onChange, onClick }) => {
    return <DropdownWrapper>
            <RadioInput                            
                location={"Current location"}
                onChange={onChange}
                onClick={onClick}
                value={"Current location"}
            />
                {locations.map((location, index) => (
                    <RadioInput 
                        key={index}
                        location={location}
                        onChange={onChange}
                        onClick={onClick}
                        value={location}
                    />
                ))}
            </DropdownWrapper>  
}

export default DropdownInputLocation;