let repo=50;
let name="ashutosh";


console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repo}`);

const gameName=new String("ashutosh");
console.log(gameName);// String ko aise bhi declare kiya ja saakta hi it provides different usaage when it come in term of usaage in browser(see running it in console of browser)
console.log(gameName.length);// length property
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("o"));
console.log(gameName.substring(0,4));// end value is not included
console.log(gameName.slice(0,4));
console.log(gameName.split(" "));// can be spli on the basis of any character rturn in the form of array 
console.log(gameName.replace("o","a"));
console.log(gameName.trim());// aaage or peeche kaa blank spaace ko remove kr det hai
