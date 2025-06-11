const tinderUser1 =new Object();//singleton object 
const tinderUser={};//object literal non singleton object

tinderUser1.id="123abc";
tinderUser1.name="ashu";
tinderUser1.isLoggedIn=false;

//console.log(tinderUser1);

//dono tarike say output same he ayega

const regularUser={    //object
    email:"hitesh@google",
    fullName:{
        userFullName:{          //object inside object
            firstName:"Hitesh",     //one more object
            lastName:"Choudhary"
        }
    }
}
console.log(regularUser.fullName.userFullName.lastName)// returns chaudhary
