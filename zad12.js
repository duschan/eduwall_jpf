function avgAndMax(niz){
    let sum = 0;
    let max = niz[0]
    for(let i = 0; i < niz.length; i++){
        if(niz[i] > max)
            max = niz[i]
        sum += niz[i]
    }
    return "Srednja vred.:" + sum/niz.length + ", naj.god. :" + max;
}


let niz = [34,23,45,23,67,87,43,21,12,40]

console.log(avgAndMax(niz))
