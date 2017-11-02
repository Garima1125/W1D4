var words = ["ground", "control", "to", "major", "tom"];

var file = words.map(function(x) {
  return x;

});
  
var length = words.map(function(word) {
  return word.length;
});

var uppercase = words.map(function(word) {
  return word.toUpperCase();
});

var reverse = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(file);
console.log(length);
console.log(uppercase);
console.log(reverse);
