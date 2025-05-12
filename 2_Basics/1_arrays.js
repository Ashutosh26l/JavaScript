const array=[0,1,2,3,4,5]
array.push(6);
array.unshift(3);//keeps this element on the beggining o thea aray
array.shift()//shift the array to the left indirectly poping the first element
console.log(array);
console.log(array.indexOf(6));
console.log(array.includes(6));
console.log(array.includes(7));
console.log(array.slice(2,4));//same as python wala slicing
console.log(array.splice(2,4));//last range included rehta hai or uss particuar part ko array say remove he kar deta hai
console.log(array);


const newArr=array.join();
console.log(newArr);
