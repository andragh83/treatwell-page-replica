import React  from 'react';
import { connect } from 'react-redux';
import styles from './StickyCollapse.module.css';
import DropdownWrapper from './DropdownWrapper';

import { setTreatment } from '../../actions';

const mapStateToProps = state => {
    console.log("treatment", state.treatment)
	return {
        treatment: state.treatment,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        getTreatment: (event) => dispatch(setTreatment(event.target.value)),
	}
}

const DropdownInputTreatment = ({ treatment, getTreatment, onClick }) => {
    return <DropdownWrapper>
                <div className={styles.radioInput}>
                    <input                          
                        name="treatment"                                            
                        type="radio" 
                        id="balayage"
                        value={"Balayage"}
                        onChange={getTreatment}
                        onClick={onClick} 
                    />                    
                    Balayage
                </div>

                <div className={styles.radioInput}>
                    <input                                                                        
                        name="treatment" 
                        type="radio" 
                        id="blowDry"
                        value={"Blow Dry"}
                        onChange={getTreatment}
                        onClick={onClick} 
                    />                    
                    Blow dry
                </div>

                <div className={styles.radioInput}>
                    <input                                                                  
                        name="treatment" 
                        type="radio" 
                        id="hairExtensions"
                        value={"Hair extenstions"}
                        onChange={getTreatment}
                        onClick={onClick} 
                    />
                    Hair Extensions
                </div>     
            </DropdownWrapper>  
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownInputTreatment);