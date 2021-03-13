import React  from 'react';
// import styles from './StickyCollapse.module.css';
import DropdownWrapper from './DropdownWrapper';
import RadioInput from './RadioInput';

const DropdownInputTreatment = ({ treatments, onChange, onClick }) => {
    return <DropdownWrapper>
                   {treatments.map((treatment, index) => (
                       <RadioInput 
                           key={index}
                           treatment={treatment}
                           onChange={onChange}
                           onClick={onClick}
                           value={treatment}
                       />
                   ))}
            </DropdownWrapper>  
}

export default DropdownInputTreatment;