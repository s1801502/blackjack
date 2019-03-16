import React from 'react';
import { connect } from 'react-redux';
import { tietokoneenVuoro, asetaPelaajanVuoro } from '../actions/vuorotActions';

const JaaNappi = ( {pakka, dispatch, pelaajanVuoro, pelaajanPisteet, tietokoneenPisteet} ) => {

    const jaa = () => {
        dispatch(tietokoneenVuoro(true));
        dispatch(asetaPelaajanVuoro(false));
    };

    return ( 
        <div className="nostaKorttiNappi">
            {pakka.length !== 52 &&<button disabled={!pelaajanVuoro || pelaajanPisteet > 21} 
            className="w3-btn w3-blue w3-round-xlarge w3-hover-light-blue w3-card-4" 
            onClick={jaa}>Jää Näihin</button>}
        </div>
        
    );
}

const mapStateToProps = (state) => ({
    pakka: state.peli.pakka,
    pelaajanVuoro: state.vuorot.pelaajanVuoro,
    pelaajanPisteet: state.peli.pelaajanPisteet,
    tietokoneenPisteet: state.peli.tietokoneenPisteet
});

export default connect(mapStateToProps)(JaaNappi);