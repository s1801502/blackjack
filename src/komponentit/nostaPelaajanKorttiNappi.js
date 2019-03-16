import React from 'react';
import { connect } from 'react-redux';
import { nostaPelaajanKortti, laskePelaajanPisteet } from '../actions/peliActions';


const NostaKorttiNappi = ({ pakassa, dispatch, pisteet, pelaajanVuoro }) => {

    const nosta = () => {
        dispatch(nostaPelaajanKortti());
        setTimeout(() => {
            dispatch(laskePelaajanPisteet());   
        },500);
    };

    return (
        <div className="nostaKorttiNappi">
            {pakassa !== 52 && <button disabled={!pelaajanVuoro || pisteet >= 21} 
            className="w3-btn w3-blue w3-round-xlarge w3-hover-light-blue w3-card-4" 
            onClick={nosta}>Nosta Kortti</button>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    pakassa: state.peli.pakka.length,
    pisteet: state.peli.pelaajanPisteet,
    pelaajanVuoro: state.vuorot.pelaajanVuoro
    
});

export default connect(mapStateToProps)(NostaKorttiNappi);