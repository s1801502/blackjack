

const nostaPelaajanKortti = () => ({
    type: 'PELAAJA_NOSTA'
});

const nostaTietokoneenKortti = () => ({
    type: 'TIETOKONE_NOSTA'
});

const laskeTietokoneenPisteet = () => ({
    type: 'LASKE_TIETOKONEEN_PISTEET'
});

const laskePelaajanPisteet = () => {
     
    return {
        type: 'LASKE_PELAAJAN_PISTEET'
    };
};

const alustaPeli = () => ({
    type: 'ALUSTA_PELI'
});




export {
    nostaPelaajanKortti,
    nostaTietokoneenKortti,
    laskeTietokoneenPisteet,
    laskePelaajanPisteet,
    alustaPeli
    
};