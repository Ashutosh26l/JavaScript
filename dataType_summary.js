// primitive (callByValues) originl vlue k copy hota hai.   
//7 types:string,number,boolean,null,undefined,symbol,bigint.



//non-primitive (callByReference)orginal value ko copy nhi hota hai original maay he cahanges hoti hai

//object,Array,Function

//object is a non-primitive data type which is used to store multiple values in a single variable.
//it is a collection of key:value pairs.
//key is always a string and value can be any data type.
//example:
const car = {
    brand:"Ford",
    model:"Mustang",
    year:1969
};
//functions and array are also objects in js.
//example:
function func(){}
console.log(typeof func); //object

const array = [1,2,3];
console.log(typeof array); //object



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack (primitive)  heap(non-primitive)

let myName1="ashupsha"

let myName2=myName1
myName2="ashu"
console.log(myName1)
console.log(myName2)

let myName3={
    name:"ashupsha"
}
let myName4=myName3
myName4.name="ashu"
console.log(myName3)
console.log(myName4)