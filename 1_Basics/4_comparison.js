//comparing all operators 
//==,===,!=,!==,>,<,>=,<=

console.log(3==3);
console.log(3===3);
console.log(3!=3);
console.log(3!==3);
console.log(3>2);
console.log(3<2);
console.log(3>=2);
console.log(3<=2);

//there is differnce between == and ===
//== checks only value
//=== checks both value and datatype

console.log("3"==3);
console.log("3"===3);

console.log(null>0);
console.log(null==0);
console.log(null>=0);// it will return true because null is firstly converted to number 0 and then compared to 0.
