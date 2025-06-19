//  TASK A 
/*Assalomu alaykum

MITASK’larni train.js fileda yozasiz!

yozish tartibingiz:

Masalani izohi
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi:
Qilgan Yechimingiz…


agarda npm run train deganimda train.js ishga tushmasa yengilgina “FAIL” bo’lasiz!*/ 


 function countLetter(harf, soz) {
     let soni = 0;
     for (let belgi of soz) {
       if (belgi === harf) {
        soni++;
       }
     }
     return soni;
   }
  
   const harf = "a";
   const soz = "banana";
   console.log(
     `${soz} so'zida '${harf}' harfi ${countLetter(harf, soz)} marta takrorlangan`
   );