// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name)
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe("jake"));
//
// var person = {
//   name: 'Jake',
//   greet: function () {
//     names.forEach((name) => {
//         console.log(this.name + 'says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

function add(a, b) {
  return a + b;
}
console.log(add(1,3));

var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));

var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));
