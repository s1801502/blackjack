import React from 'react';

const Toinen = () => (
    <div>
      <h2>Ohje</h2>
      <p>Blackjackissa pelaajat pyrkivät saamaan korteillaan suuremman summan kuin 
        jakaja. Korttien summan tulee olla mahdollisimman lähelle 21, 
        mutta yli ei saa mennä - kaikki kädet, joiden summa on yli 21, 
        häviävät automaattisesti.</p>

<p>Pelaaja voittaa, jos pysyy alle 21:n ja saa suuremman summan kuin jakaja tai jos 
  jakaja menee yli 21:n. Jakaja voittaa jos pelaaja menee yli 21:n tai saa saman tai
  suuremman summan kuin pelaaja. Jakaja nostaa lisää kortteja jos pisteluku on alle 17. </p>

<h3>Korttien arvot:</h3>

    <p>numerokortit: sama kuin kortin numero (2-10)<br />
    kuvakortit, paitsi ässä: 10<br />
    ässä: 1 tai 11 pelaajan toiveesta riippuen</p>

<p>Jos pelaajalle jaettujen kahden ensimmäisen kortin arvojen summa on 21 (ts. kymppi tai kuvakortti + ässä), 
  on pelaajalla blackjack. Tällä hän voittaa jakajan kaikki muut kädet paitsi jakajan 
  oman blackjackin. </p>
    </div>
  );

  export default Toinen;