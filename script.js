"use strict";

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(massMark, massJohn); */

/* const firstName = "Jonas";
const job = "teacher";
const birtYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birtYear) + " year old " + job + "!";

console.log(jonas);

const jonasNew = `I'am ${firstName} a ${year - birtYear} year old ${job}!`;
console.log(jonasNew); */

/* const inputYear ='1991';
console.log(Number(inputYear),inputYear)
console.log(String(23),23) */

//FALSY VALUES and TRUTY VALUES
//falsy values : 0, '', undefined, null, NaN
/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean("")); */

/* let height ;

if (height) {
  console.log(`YAY height is Defined`);
} else {
  console.log(`Opps height is UNDEFINED`)
  } */

/* const age = 18;
if (age === 18) console.log(`You just became adult`); */

// === şeklinde 3 lü eşit işareti type coarcion yapmaz yani iki tarafta number ve iki tarafta aynı olursa çalışır
// == şeklinde ikili eşitlik olunca type coarcion oluyor yani string ve number kıyaslaması olunca bir her iki tarafıda aynı type zorluyor

/* const favorite = prompt("What is your favorite number"); */

/* const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Plan course structure");
    break;
  case "Tuesday":
    console.log("prepare videos");
    break;
  default:
    console.log("Not a valid day");
} */

// Break koymazsak komut durmaz, bunu eğer günlerden pazartesi veya salı gibi durumlarda break koymamayı düşünebiliriz .

// Expression and statments
//  3 + 4 bir expression dur çünkü değer üretiyor.
// if else boluğu mesela bir atatement dir çünkü değer üretmiyor

// TERNARY OPERATOR

/* const age = 18;

age >= 18
  ? console.log("You can drink ayran")
  : console.log("you can drink milk"); */

// STRICT MODE
// 'use strict' şeklinde strict modeu çalıştırmazsak değişkenlerde isim yanlışlığı yapsak bile bizi uyarmaz

// FUNCTIONS

/* function logger() {
  console.log("my name is Jonas");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); */

//FUNCTION TYPES

/* 
Standart fonksiyon çağırmada fonksiyonu kodun sonuna bile yazsan çalışır, yani sıralamaya tabi değildir
fakat expression şeklindeki fonksiyon tanımlamada önce fonksiyonu tanımlayacağız
sonraki satırlarda ancak o zaman fonksiyonu kullanabiliriz.
*/

//function declaration
/* function calcAge1(birthyear) {
  return 2037 - birthyear;
} */

//function expression
/* const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};

const age2 = calcAge2(1991);
console.log(age2); */

// ARROW FUNCTIONS
/* 
RETURN YAZMAMIZA GEREK YOK, RETURN OTOMATİK olarak devereye giriyor. Tabi eğer tek
satırda fonksiyonu yazıyorsak, eğer fonksiyon bir çok satırdan
oluşuyorsa o zaman parantez açacağız ve return yine kullanacağız.
En önemli fartklardan birisi de ARROW fonksiyonlarda this keywordu yoktur.
*/

/* const calcAge3 = (birthyear) => 2037 - birthyear;

console.log(calcAge3(1881));

 */
//ARRAYS

const friends = ["michael", "Steven", "Peter"];
friends.push("Jay"); // Diziye veri ekler
console.log(friends);

friends.unshift("John"); // dizinin başına ekleme yapar. Dizi uzunluğunu return eder
console.log(friends);

friends.pop(); // dizinin son elemanını siler, silinen elemanı return eder
console.log(friends);

friends.shift(); // Dizinin ilk elmanını siler
console.log(friends);

console.log(friends.indexOf("Steven")); // belirtilen elemanın indexini döndürür. Eleman yoksa -1 döner

// ES6 komutu yeni
console.log(friends.includes("Steven")); // true yada false döner

const jonasArray = ["jonas", "Schmedtmann", 2037 - 1991];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friend: ["michael", "Steven", "Peter"],
};
