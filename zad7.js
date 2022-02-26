function ukupna_cena_2(Roba, porez){
    if(Roba.oporezovanost == true){
        return ukupna_cena(Roba.cena, porez);
    }
    else{
        return Roba.cena;
    }
}


function ukupna_cena(cena,porez){
    return cena * (1 + porez/100);
}


function Roba(naziv, cena, oporezovanost){
    this.naziv = naziv;
    this.cena = cena;
    this.oporezovanost = oporezovanost;

    this.showDetail = function (){
        return this.naziv + ", cena:" + this.cena + ", oprezovanost:" + this.oporezovanost;
    }
}

var roba1 = new Roba("patike", 5000, true)
var roba2 = new Roba("patike", 5000, false)

console.log(roba1.showDetail());
console.log(ukupna_cena_2(roba1,20));

console.log(roba2.showDetail());
console.log(ukupna_cena_2(roba2,20));