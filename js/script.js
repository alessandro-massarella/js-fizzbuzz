// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// modulo multiplo di 3 = num % 3 === 0
// modulo multiplo di 5 = num % 5 === 0

// creo un array vuoto di lunghezza 100
var numeri = new Array(100);

// inserisco i numeri nell'array
for (var i = 0; i < 100; i++) {
  numeri[i] = i + 1;
  if (numeri[i] % 3 === 0) {
      document.getElementById('lista').innerHTML += ('<li>') + numeri[i] + (' Fizz') + ('</li>');
  } else if (numeri[i] % 5 === 0) {
          document.getElementById('lista').innerHTML += ('<li>') + numeri[i] + (' Buzz') + ('</li>');
  } else
  document.getElementById('lista').innerHTML += ('<li>') + numeri[i] + ('</li>');
}
