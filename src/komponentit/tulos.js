import React from 'react';
import { connect } from 'react-redux';
import { asetaPeliLoppu } from '../actions/vuorotActions';
import { nostaTietokoneenKortti, laskeTietokoneenPisteet } from '../actions/peliActions';



class Tulos extends React.Component {
    

    lasketaanPisteita = () => {
        if (this.props.pelaajanPisteet > 21 || this.props.tietokoneenPisteet > 21)
            this.props.dispatch(asetaPeliLoppu(true)); 

        if (this.props.tietokoneenPisteet < 17 && this.props.tietokoneenVuoro) {
            setTimeout(() => {
                this.props.dispatch(nostaTietokoneenKortti());
                this.props.dispatch(laskeTietokoneenPisteet());
            }, 2000);
            
        }
        else if (this.props.tietokoneenPisteet >= 17 && this.props.tietokoneenVuoro) {
            setTimeout(() => {
                this.props.dispatch(asetaPeliLoppu(true));
            }, 2500);
            
        }
    };

    laskeTulos = () => {

        if (this.props.pelaajanPisteet === 21 && !this.props.tietokoneenVuoro) {
            return 'BLACKJACK!'
        }

        if (this.props.pelaajanPisteet > 21) {    
            return 'Jakaja voitti!'
        }

        else if (this.props.pelaajanPisteet > this.props.tietokoneenPisteet)
            return 'Pelaaja voitti!';

        else if (this.props.tietokoneenPisteet > 21)
            return 'Pelaaja voitti!'

        else
            return 'Jakaja voitti!'

    }

    componentDidUpdate() {
        this.lasketaanPisteita();
    }
    
    render() {
        const BLACKJACK = ((this.props.pelaajanPisteet === 21) && (!this.props.tietokoneenVuoro));
        return (
            <div>
                <p>Tulos: </p>
                {(this.props.pelaajanPisteet > 21 || BLACKJACK
                || this.props.peliLoppu) && 
                <h2 className="julistus w3-animate-right w3-center">{this.laskeTulos()}</h2>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pelaajanPisteet: state.peli.pelaajanPisteet,
    tietokoneenPisteet: state.peli.tietokoneenPisteet,
    peliLoppu: state.vuorot.peliLoppu,
    tietokoneenVuoro: state.vuorot.tietokoneenVuoro
});

export default connect(mapStateToProps)(Tulos);

