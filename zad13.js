function sortiranjePosiljki(posiljke){
    let sortirano = [];
    for(pos in posiljke){
        if(posiljke[pos]['tezina'] < 500){            
            sortirano.push(posiljke[pos]);
        }   
    }
    return sortirano;
}

let posiljke = [{'adresa': 'adresa1', 'tezina': 340},
                {'adresa': 'adresa1', 'tezina': 640},
                {'adresa': 'adresa2', 'tezina': 740},
                {'adresa': 'adresa3', 'tezina': 240}];
console.log(posiljke);
console.log(sortiranjePosiljki(posiljke));

