const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach(function (company) {
//   console.log(company);
// });

//filter

// let canDrink = [];
// for (i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

//Filter retail companires

// const retailCompanies = companies.filter(function (company) {
//   return company.category === "Retail";
// });

// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail",
// );

// console.log(retailCompanies);

// get 80's companies

// const eightiesCompanies = companies.filter(function (company) {
//   if (company.start >= 1980 && company.start <= 1989) {
//     return true;
//   }
// });

// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start <= 1989,
// );
// console.log(eightiesCompanies);

//companies that are lasted 10 years or more

// const lastTenYears = companies.filter(function (company) {
//   if (company.end - company.start >= 10) {
//     return true;
//   }
// });

// const lastTenYears = companies.filter(
//   (company) => company.end - company.start >= 10,
// );
// console.log(lastTenYears);

//map

// Create array of company names

// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// console.log(companyNames);

// const TestMap = companies.map(function (company) {
//   return `${company.name} [${company.start}-${company.end}]`;
// });

// const TestMap = companies.map(
//   (company) => `${company.name} [${company.start}-${company.end}]`,
// );

// console.log(TestMap);

// square root of each age

// const agesSquare = ages.map((age) => Math.sqrt(age));
// const agesSquare = ages.map((age) => age * 2);
// console.log(agesSquare);

// const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(ageMap);

//sort

// const sortedCompanies = companies.sort(function (company1, company2) {
//   if (company1.start > company2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((company1, company2) =>
//   company1.start > company2.start ? 1 : -1,
// );
// console.log(sortedCompanies);

//Sort Ages
// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);

//reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// get total years for all company's

// const totalYears = companies.reduce(function (total, company) {
//   return company.end - company.start + total;
// }, 0);

// const totalYears = companies.reduce(
//   (total, company) => company.end - company.start + total,
//   0,
// );
// console.log(totalYears);

// Combine Methods

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((age, total) => age + total, 0);
console.log(combined);
