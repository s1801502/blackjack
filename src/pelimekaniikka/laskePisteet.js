import arvoEnum from './arvo';

export default (kortit) => {
    let assia = 0;
    let arvo = kortit.map(kortti => arvoEnum[kortti.arvo]).reduce((a, b) => a + b, 0);

    kortit.forEach(kortti => {
        if (kortti.arvo === 'ASSA') assia++;
    });

    if (assia > 0) {
        if (arvo > 21) {
            let laskuri = 1;

            while (laskuri <= assia) {
                if (arvo - laskuri * 10 < 21)
                    return arvo - laskuri * 10;
                laskuri++;
            }
            return arvo - assia * 10;

        }
    }

    return arvo;
}