 function randomNumbers(a,b){
sum = a+b 
random= Math.floor((Math.random() * sum)+ 1) ;
final= random === sum ? console.log('You won') : console.log('you lost')
 return random;
}

console.log(randomNumbers(5,5))