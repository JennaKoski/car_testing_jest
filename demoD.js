"use strict";

const search = require("./carStorageFilePromises");

// search().then(console.log).catch(console.log);
// search("model", "GTX")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// search("model", "GTX")
//   .then((data) => print(data))
//   .catch((error) => console.log(error));
// search("model", "Bored T-model")
//   .then((data) => print(data))
//   .catch((error) => console.log(error));

// function print(dataArray) {
//   for (let car of dataArray) {
//     console.log(car.licence);
//   }
// }

// (async () => {
//   try {
//     console.log(await search());
//     console.log("#### one ####");
//     const result = await search("model", "GTX");
//     console.log(result);
//     console.log("#### two ####");
//     console.log(await search("licence", "ABC-1"));
//     console.log("#### three ####");
//   } catch (error) {
//     console.log("Sorry!" + error);
//   }
// })();

async function run() {
  try {
    const result = await search();
    console.log(result);
    for (let car of result) {
      console.log(car.model.toUpperCase());
    }
    const licenceResult = await search("licence", "ABC-1");
    if (licenceResult.length > 0) {
      console.log(licenceResult[0].model);
    } else {
      console.log("no cars found");
    }
  } catch (error) {
    console.log(error.message);
  }
}

run();
