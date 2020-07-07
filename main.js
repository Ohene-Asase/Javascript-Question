function randomNumbers(a, b) {
    sum = a + b
    random = Math.floor((Math.random() * sum) + 1);
    final = random === sum ? console.log('You won') : console.log('you lost')
    return random;
}

console.log(randomNumbers(5, 5))

function palindrum(word) {

    let str1 = word
    array1 = str1.split('')

    stri2 = word;
    array2 = stri2.split('');
    array2.reverse();

    console.log(array1);
    console.log(array2)

    final = JSON.stringify(array1) === JSON.stringify(array2) ? console.log('palindrum') : console.log('not palindrum')

  return



}

console.log(palindrum('madam'))
