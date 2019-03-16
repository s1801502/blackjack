

const alustus = {
    pelajanVuoro: false,
    tietokoneenVuoro: false,
    peliLoppu: false
};

const vuorotReducer = (state = alustus, action) => {
    switch (action.type) {
        case 'TIETOKONEEN_VUORO':
            return {
                ...state,
                tietokoneenVuoro: action.vuoro
                
            };
        case 'PELAAJAN_VUORO':
            return {
                ...state,
                pelaajanVuoro: action.vuoro,
                
            };
        case 'PELI_LOPPU':
            return {
                ...state,
                peliLoppu: action.loppu
            };
        case 'ALUSTA_VUOROT':
            return {
                pelajanVuoro: false,
                tietokoneenVuoro: false,
                peliLoppu: false
            }
        default:
            return state;
    }
};

export default vuorotReducer;