const marvel_heroes = ["thor","spiderman","ironman"];
const dc_heroes = ["superman","flash","batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);
marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes);// alag say koi array bana kar insert nahi kar raha hai inside the marvel_heroes wala array it just adds the originl element and insert the new array elements in to it
console.log(all_heroes);
console.log(marvel_heroes.indexOf("spiderman"));

const newHeroes = [...marvel_heroes,...dc_heroes];
console.log(newHeroes);//it is know as spread operator and many arrays can be added up to it

const another_array = [1,2,3,[4,[5,6]]];
console.log(another_array.flat(1));//giving the number inside the brcket to let the function know ki kitne brcets ko openkrna hai

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"}));

let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3));
