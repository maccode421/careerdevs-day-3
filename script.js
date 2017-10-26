// var sum = 4 + 7;
// console.log(sum);

// var myName = "Macc";
// console.log("Hello " + myName);

var numbers = [47, 22, 48, 22, 13, 85, 33, 19, 24, 36];

var smallestNum = numbers[0];
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallestNum) {
    smallestNum = numbers[i];
    }
}
console.log(smallestNum);

