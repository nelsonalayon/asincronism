// a promise is a something that could happen in the future

const promise = new Promise((resolve, reject) => {
  resolve("resolved");
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(` there are ${cows} cows on the farm`);
  } else {
    reject("there are less than 10 cows");
  }
});

// How to call a promise

countCows
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise done");
  });
