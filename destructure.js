const bestFriens = {
    fullName: "Abdul aziz",
    age: 27,
    school: "Satkhira Govt High School",
    college: "Rajar Bagan Govt College",
    address: "Satkhira",
    favourite: {
        food: "rice",
        place: "hills",
        hobbies: "reading"
    }
}
const name1 = bestFriens.fullName;
const fvtPlace = bestFriens.favourite.place;
const { fullName, age } = bestFriens;
const { food, place } = bestFriens.favourite;

console.log(bestFriens.fullName, bestFriens.age, bestFriens.favourite)
console.log (name1, fvtPlace);
console.log( fullName, age, food, place);
