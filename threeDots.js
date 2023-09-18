// to add multiple arrays used the concat method
const ages1 = [10,11,14,10,9];
const ages2 = [33,39,29,34,];
const ages3 = [65,76,68,80,62,70];
const allAges = ages1.concat(ages2).concat(50).concat(ages3);
console.log(allAges);

// we can do this same thing by using three dots 
const allAges2 = [...ages1,...ages2,50,...ages3];
console.log(allAges2);

// if we want to find the largest value then the code is
const shamim = 100;
const aziz = 30;
const delower = 490;
const rimu = 770;
const maximum = Math.max(shamim, delower, aziz, rimu);
console.log(maximum);
// same thing by using threeDots 
const kotiTaka = [shamim, aziz, delower, rimu];
const maximum2 = Math.max(...kotiTaka);
console.log(maximum2);