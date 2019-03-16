import React from 'react';
import { connect } from 'react-redux';

import PelaajanKortit from '../komponentit/pelaajanKortit';
import NostaKorttiNappi from './nostaPelaajanKorttiNappi';
import TietokoneenKortit from './tietokoneenKortit';
import AloitaPeliNappi from './aloitaPeliNappi';
import Info from './info';
import JaaNappi from './jaaNappi';
import KortinTakapuoli from './kortinTakapuoli';


const Etusivu = ( { tietokoneenKortteja } ) => (
    <div>
      <h2 className="julistus">
        Let The Games Begin!
        <AloitaPeliNappi />
      </h2>
      
      <div className="w3-container w3-cell vasen">
        <span className="kortit_vierekkain"><TietokoneenKortit /> {tietokoneenKortteja === 1 && <KortinTakapuoli />}</span>
        <div className="napit_rinnakkain"><NostaKorttiNappi /><JaaNappi /></div>
        <PelaajanKortit />
      </div>
      <div className="w3-container w3-cell oikea w3-card-4">
        <Info />
      </div>
      
    </div>
);
  const mapStateToProps = (state) => ({
    tietokoneenKortteja: state.peli.tietokoneenKortit.length
  });

  export default connect(mapStateToProps)(Etusivu);