// 1. Melakukan Looping Menggunakan While

var kelipatan = 2 

console.log('SOAL 1  \nLOOPING PERTAMA') ;

while(kelipatan<=20) {
    console.log(kelipatan+' - i love coding')
    kelipatan +=2;
}

console.log('LOOPING KEDUA') ;

while (kelipatan>2){
    kelipatan -=2
    console.log(kelipatan+ ' i will become full stack developer') ;
}


console.log('************************************************')

// 2. Melakukan Looping Menggunakan For

console.log('SOAL 2  \nLOOPING PERTAMA') ;
for (var kelipatan2 = 1; kelipatan2 <=20 ; kelipatan2 ++){
    console.log(kelipatan2+'- i luv coding')
}


console.log('LOOPING KEDUA') ;
for (kelipatans2 = 20; kelipatans2 > 0  ; kelipatans2 --){
    console.log(kelipatans2+'- i will become fullstack developer')

}


console.log('************************************************')

// 3. Angka Ganjil dan Genap

console.log('SOAL 3  \nGANJIL GENAP') ;

console.log('contoh ganjil genap')

for(var limit = 1; limit <= 100 ; limit++) {
    if( limit % 2 === 0 ) {
        console.log('GENAP');
        console.log('counter sekarang = ' +limit);
    }
    else { 
        console.log('GANJIL');
        console.log('counter sekarang = ' +limit);
    }
  }

  console.log('************************************************')


  console.log('contoh - untuk pertambahan counter 2')

  for(var tiga = 1; tiga <= 100 ; tiga=tiga+2) {

     

    if( tiga % 3 === 0 ) {
        
        console.log(+tiga+ ' = KELIPATAN 3'); }
            else  {
        console.log(tiga ); 


    }
}


console.log('************************************************')

console.log('contoh - untuk pertambahan counter 5')

for(var lima = 1; lima <= 100 ; lima=lima+5) {

     

    if( lima % 6 === 0 ) {
        
         console.log(+lima+ ' = KELIPATAN 6'); }
            else  {
         console.log(lima ); 


    }
}

console.log('************************************************')


console.log('contoh - untuk pertambahan counter 9')

for(var sembilan = 1; sembilan <= 100 ; sembilan=sembilan+9) {

     

    if( sembilan % 10 === 0 ) {
        
        console.log(+sembilan+ ' = KELIPATAN 10'); }
            else  {
        console.log(sembilan ); 


    }
}


