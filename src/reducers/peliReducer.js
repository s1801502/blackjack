
import luoPakka from '../pelimekaniikka/luoPakka';
import laskePisteet from '../pelimekaniikka/laskePisteet';




const pakka = luoPakka();

const alustus = {
    pakka,
    pelaajanKortit: [],
    tietokoneenKortit: [],
    tietokoneenPisteet: 0,
    pelaajanPisteet: 0
};

const peliReducer = ( state = alustus, action) => {
    switch (action.type) {
        case 'ALUSTA_PELI':
            return {
                pakka: luoPakka(),
                pelaajanKortit: [],
                tietokoneenKortit: [],
                tietokoneenPisteet: 0,
                pelaajanPisteet: 0
            }
        case 'PELAAJA_NOSTA':
        return {
            ...state,
            pelaajanKortit: state.pelaajanKortit.concat(state.pakka[state.pakka.length - 1]),
            pakka: state.pakka.slice(0, state.pakka.length - 1)
        };
        case 'TIETOKONE_NOSTA':
        return {
            ...state,
            tietokoneenKortit: state.tietokoneenKortit.concat(state.pakka[state.pakka.length - 1]),
            pakka: state.pakka.slice(0, state.pakka.length - 1)
        };
        case 'LASKE_TIETOKONEEN_PISTEET':
        return {
            ...state,
            tietokoneenPisteet: laskePisteet(state.tietokoneenKortit)
        };
        case 'LASKE_PELAAJAN_PISTEET':
        return {
            ...state,
            pelaajanPisteet: laskePisteet(state.pelaajanKortit)
        };
        default:
            return state;

    }

};

export default peliReducer;