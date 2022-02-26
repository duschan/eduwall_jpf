var a = 60;
var b = 45;

// converts degree to radians
function degToRad(x){
    return x * Math.PI / 180;
}

var alfa = degToRad(a);
var beta = degToRad(b);

var izraz = Math.sin(alfa)**2  + 2 * Math.cos(beta) - Math.sin(alfa)*Math.cos(beta);
console.log(izraz);