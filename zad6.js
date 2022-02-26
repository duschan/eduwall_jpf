function ukupna_cena(cena,porez){
    return cena * (1 + porez/100);
}

console.log(ukupna_cena(34534,18));