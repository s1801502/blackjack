

const tietokoneenVuoro = (vuoro) => ({
    type: 'TIETOKONEEN_VUORO',
    vuoro
});

const asetaPelaajanVuoro = (vuoro) => ({
    type: 'PELAAJAN_VUORO',
    vuoro
});

const asetaPeliLoppu = (loppu) => ({
    type: 'PELI_LOPPU',
    loppu
});

const alustaVuorot = () => ({
    type: 'ALUSTA_VUOROT'
});




export {
    tietokoneenVuoro,
    asetaPelaajanVuoro,
    asetaPeliLoppu,
    alustaVuorot
};