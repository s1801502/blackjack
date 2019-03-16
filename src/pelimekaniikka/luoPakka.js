import maa from './maa';
import arvo from './arvo';
import apiArvo from './apiArvo';
import apiMaa from './apiMaa';

const luoPakka = () => {
    let pakka = [];
    let urlit = [];
    
    for (let m in maa) {
        for (let a in arvo) {
            pakka.push({maa: m, arvo: a, url:''});
        }
    }

    for (let m in apiMaa) {
        for (let a in apiArvo) {
            urlit.push({url: `./img/${apiArvo[a]}${apiMaa[m]}.png`});
        }
    }

    for (let i = 0; i < 52; i++) {
        pakka[i] = Object.assign(pakka[i], urlit[i]);
    }

    

    
    return pakka.sort(() => Math.random() - 0.5);
}

export default luoPakka;