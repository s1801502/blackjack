import React from 'react';
import { connect } from 'react-redux';
import { nostaPelaajanKortti, nostaTietokoneenKortti, laskeTietokoneenPisteet, laskePelaajanPisteet, alustaPeli } from '../actions/peliActions';
import { asetaPeliLoppu, asetaPelaajanVuoro, alustaVuorot } from '../actions/vuorotActions';

const aloitaPeliNappi = ({ pakassa, dispatch, peliLoppu }) => {

const alusta = () => {
    
    dispatch(alustaPeli());
    dispatch(alustaVuorot());

    setTimeout(() => {
        dispatch(nostaTietokoneenKortti());
        dispatch(laskeTietokoneenPisteet());
    }, 500);

    setTimeout(() => {
        dispatch(nostaPelaajanKortti());
        dispatch(laskePelaajanPisteet());
    }, 2000);
    
    setTimeout(() => {
        dispatch(nostaPelaajanKortti());
        dispatch(laskePelaajanPisteet());
    }, 3000);

    setTimeout(() => {
        dispatch(asetaPeliLoppu(false));
        dispatch(asetaPelaajanVuoro(true));
    }, 3500);
    
    
};

    return (
        <span className="aloitaPeliNappi">
            {(pakassa === 52 || peliLoppu) && <button className="w3-btn w3-blue w3-round-xlarge w3-hover-light-blue w3-card-4" 
            onClick={alusta}>Aloita Peli</button>}
        </span>
    );
}

const mapStateToProps = (state) => ({
    pakassa: state.peli.pakka.length,
    peliLoppu: state.vuorot.peliLoppu,
    
});

export default connect(mapStateToProps)(aloitaPeliNappi);