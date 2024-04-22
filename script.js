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
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

let height ;

if (height) {
  console.log(`YAY height is Defined`);
} else {
  console.log(`Opps height is UNDEFINED`)
  }