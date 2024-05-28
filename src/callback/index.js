// Estructura de un callback

function sum(a, b, callback) {
  callback(a + b);
}

sum(1, 2, function (result) {
  console.log(result); // 3
});

function sum2(a, b) {
  return a + b;
}

function calc(a, b, callback) {
  return callback(a, b);
}

console.log(calc(9, 2, sum2));

setTimeout(function () {
  console.log("Hello");
}, 2000);


function greetings (name) {
    console.log(`hello ${name}`)
}

setTimeout(greetings, 2000, "Nelson")