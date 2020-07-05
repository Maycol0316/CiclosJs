function getRandom() {
    return Math.floor(Math.random() * 100);
}
var randomNumber = getRandom();

var a = 0;
for(let a=0;randomNumber!=50;a++){
    var randomNumber = getRandom();
    a++;
    console.log("al intento:" a)
}
