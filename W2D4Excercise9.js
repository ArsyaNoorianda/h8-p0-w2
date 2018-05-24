console.log('Soal 1') ;

function shoutOut () 
{

return 'EELLLOOOWW!!! Function!' ;

}


console.log(shoutOut()) ;


console.log('......................................................') ;



console.log('Soal 2') ;

function calculateMultiply(num1,num2) 
{
    return num1*num2 ;
}


    var num1 = 5;
    var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('......................................................') ;



console.log('Soal 3') ;


function processSentence(name,age,address,hobby)
{
    var hasil = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
    return hasil;
}


var name = "Arsya";
var age = 24;
var address = "Jln. Sawo, Jakarta";
var hobby = "Console Gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 










