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




//         B-TASK: B-TASK: 

/*Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.*/



// My Solution - Big O(n)
const countDigits = (str) => {
  return str.split('').map(Number).filter(char => !isNaN(char)).length
}
console.log(countDigits(("ad2a54y79wet0sfgb9"))); //7

// Alternative solution 1: Using reduce - Big O(n)
const countDigitsReduce = (str) => {
  return str.split('').reduce((count, char) => !isNaN(Number(char)) ? count + 1 : count, 0);
}
console.log(countDigitsReduce("ad2a54y79wet0sfgb9")); //7

// Alternative solution 2: Using regex - Big O(n)
const countDigitsRegex = (str) => {
  const regex = /\d/g; // \d matches any digit
  return (str.match(regex) || []).length;
}
console.log(countDigitsRegex("ad2a54y79wet0sfgb9")); //7

// Alternative solution 3: Using for...of loop - Big O(n)
const countDigitsLoop = (str) => {
  let count = 0;
  for (let char of str) {
      if (!isNaN(Number(char))) count++;
  }
  return count;
}
console.log(countDigitsLoop("ad2a54y79wet0sfgb9")); 



// C-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

const letterExist2 = (str, str2) => {
  return str.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(letterExist2("abs", "cba")); // false chiqarishi kerak

console.log(letterExist2("abc", "cba")); // true chiqarishi kerak 


// yuqorida foidalangan narsalar tasnifi quydagicha 

// str.split(''): Stringni harflar massiviga aylantiradi.
// sort(): Harflarni alifbo tartibida joylashtiradi.
// join(''): Harflar massivini qaytadan stringga aylantiradi.
// ===: Tartiblangan stringlarni solishtiradi.


/* D-TASK: 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
 */


class Shop {
  constructor(non, lagmon, cola) {
      this.products = {
          non: non,
          lagmon: lagmon, 
          cola: cola
      };
  }

  // Vaqtni olish uchun yordamchi metod
  getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0'); // Soatni 2 xonali formatda olish
      const minutes = String(now.getMinutes()).padStart(2, '0'); // Daqiqani 2 xonali formatda olish
      return `${hours}:${minutes}`;
  }

  qoldiq() {
      const time = this.getCurrentTime();
      return `hozir ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
  }

  sotish(product, amount) {
      const time = this.getCurrentTime();
      if (this.products[product] >= amount) {
          this.products[product] -= amount;
          return `hozir ${time}da ${amount}ta ${product} sotildi`;
      }
      return `Kechirasiz, ${product} yetarli emas`;
  }

  qabul(product, amount) {
      const time = this.getCurrentTime();
      this.products[product] += amount;
      return `hozir ${time}da ${amount}ta ${product} qabul qilindi`;
  }
}

// Test
const shop = new Shop(4, 5, 2);
console.log(shop.qoldiq()); // 4ta non, 5ta lagmon, 2ta cola
console.log(shop.sotish('non', 3)); // hozir 12:00da 3ta non sotildi
console.log(shop.qabul('cola', 4)); // hozir 12:00da 4ta cola qabul qilindi
console.log(shop.qoldiq()); // 4ta non, 5ta lagmon, 6ta cola



/*Kodda ishlatilgan elementlar:


1. class - Klas

Shop obyektini yaratish uchun shablon

2. constructor() - Konstruktor

Obyekt yaratilganda boshlang'ich qiymatlar o'rnatish

3. this - Obyekt murojaat

Joriy obyektning xususiyatlari va metodlariga kirish

4. getCurrentTime() - Yordamchi metod

Joriy vaqtni formatlash uchun

5. new Date() - Vaqt obyekti

Hozirgi sana/vaqtni olish

6. padStart(2, '0') - Matn formatlash

Raqamlarni 2 xonali ko'rinishga keltirish (01, 02, 03...)

7. Template literals (` va ${})

Matn va o'zgaruvchilarni birlashtirish

8. Obyekt xususiyatlari (this.products)

Ma'lumotlarni saqlash

9. Shartli operator (if)

Mahsulot miqdorini tekshirish

10. console.log() - Chiqarish

Natijalarni ekranga chiqarish

Bu elementlar vaqt bilan ishlash, ma'lumot saqlash va mantiqiy tekshirishni ta'minlaydi.재시도Claude는 실수를 할 수 있습니다. 응답을 반드시 다시 확인해 주세요. Sonnet 4 */







 /* TASK E

Shunday function tuzing, u bitta string argumentini qabul qilib,
qabul qilingan stringni teskari ko'rinishda return qilsin

MASALAN: getReverse("hello"); return qilsin "olleh" */



function getReverse(str) {
  return str.split('').reverse().join('');
}


console.log(getReverse("hello"));      // "olleh" chiqadi
console.log(getReverse("JavaScript")); // "tpircSavaJ" chiqadi
console.log(getReverse("12345"));      // "54321" chiqadi




  /*String metodlari ya'ni yuqorida foydalangan metodlar:
1. split('')

String-ni bo'laklarga ajratadi
'' - har bir harfga ajratish
"hello" → ['h', 'e', 'l', 'l', 'o']

2. reverse()

Massiv elementlarini teskariga o'giradi
['h', 'e', 'l', 'l', 'o'] → ['o', 'l', 'l', 'e', 'h']

3. join('')

Massiv elementlarini birlashtiradi
['o', 'l', 'l', 'e', 'h'] → "olleh" */