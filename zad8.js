function zamenaClanaNiza(niz){ 
    var temp = niz[0]    
    niz[0] = niz[niz.length -1]
    niz[niz.length -1] = temp
    return niz    
}

var niz = [1,2,3]

console.log(niz)
console.log(zamenaClanaNiza(niz))