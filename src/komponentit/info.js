import React from 'react';
import { connect } from 'react-redux';
import Tulos from './tulos';

const Info = ( { tietokoneenPisteet, pelaajanPisteet } ) => {

    return (
        <div className="info">
            <p>Tietokoneen pisteet: {tietokoneenPisteet}</p>
            <p>Pelaajan pisteet: {pelaajanPisteet}</p>
            <Tulos />
        </div>
    );

}

const mapStateToProps =  (state) => ({
    tietokoneenPisteet: state.peli.tietokoneenPisteet,
    pelaajanPisteet: state.peli.pelaajanPisteet
});

export default connect(mapStateToProps)(Info);