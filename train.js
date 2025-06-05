//NodeJS event loop, Callback, Asynchronous functionlar & MITASK-A;

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yahshi talaba bo'ling", // 0-20
//   "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "o'zingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo'q endi" // 60+
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") {
//     callback("Insert a number", null);
//   } else if (a <= 20) {
//     callback(null, list[0]);
//   } else if (a > 20 && a < 30) {
//     callback(null, list[1]);
//   } else if (a >= 30 && a <= 40) {
//     callback(null, list[2]);
//   } else if (a > 40 && a < 50) {
//     callback(null, list[3]);
//   } else if (a >= 50 && a <= 60) {
//     callback(null, list[4]);
//   } else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("Passed here 0");

// maslahatBering(65, (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("Javob:", data);
//   }
// });

// console.log("Passed here 1");





// NodeJS event loop, Callback, Asynchronous functionlar & MITASK-A 2-qismi.







console.log("Jack Ma maslahatlari");

const list = [
  "yahshi talaba bo'ling", // 0-20
  "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
  "o'zingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bo'lgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yo'q endi" // 60+
];


// CALLBACK FUNCTION

function maslahatBering(a, callback) {
    if (typeof a !== "number") {
        callback("Insert a number", null);
    }
    else if (a <= 20) {
        callback(null, list[0]);
    }
    else if (a > 20 && a <= 30) {
        callback(null, list[1]);
    }
    else if (a > 30 && a <= 40) {
        callback(null, list[2]);
    }
    else if (a > 40 && a <= 50) {
        callback(null, list[3]);
    }
    else if (a > 50 && a <= 60) {
        callback(null, list[4]);
    }
    else {
        setTimeout(function() {
            callback(null, list[5]);
        }, 1000);
    }
}

console.log("passed here 0");

maslahatBering(75, (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        console.log(data);
    }
});

console.log("passed here 1");



// ASYNCHRONOUS FUNCTION


async function maslahatBering(a) {
  if (typeof a !== "number") {
    throw new Error("Insert a number");
  } else if (a <= 20) {
    return list[0];
  } else if (a > 20 && a <= 30) {
    return list[1];
  } else if (a > 30 && a <= 40) {
    return list[2];
  } else if (a > 40 && a <= 50) {
    return list[3];
  } else if (a > 50 && a <= 60) {
    return list[4];
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}




// CALL VIA THEN/CATCH



// then/catch
// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");


// CALL VIA ASYNC/AWAIT


// async/await
// async function run() {
//     try {
//       let javob = await maslahatBering(25);
//       console.log(javob);
      
//       javob = await maslahatBering(35);
//       console.log(javob);
      
//       javob = await maslahatBering(41);
//       console.log(javob);
//     } catch (error) {
//       console.log("ERROR:", error);
//     }
//   }
  
//   run();





//  TASK A 



// function countLetter(harf, soz) {
//     let soni = 0;
//     for (let belgi of soz) {
//       if (belgi === harf) {
//         soni++;
//       }
//     }
//     return soni;
//   }
  
//   const harf = "a";
//   const soz = "banana";
//   console.log(
//     `${soz} so'zida '${harf}' harfi ${countLetter(harf, soz)} marta takrorlangan`
//   );

