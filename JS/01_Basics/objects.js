//singleton -> object.create()

//object literals


const mySym=Symbol("key1")
const  JsUser = {
    name:"Ayesha",
    "full_name":"Ayesha Farzand",
    location:"Lahore",
    [mySym]:"key1",
    email:"ayesha@gmail.com",
    isloggedIn:false,
    lastLoginDays:["Monday", "Saturday"]

}
 //+++++++++++++++++++++ two methods to run objects
console.log(JsUser.email);
console.log(JsUser["email"]);
//+++++++++++++++++++++++++++
console.log(JsUser["full_name"]);
console.log(JsUser[mySym]);


//change & Freeze concept
JsUser.email="ayesha.ch@gmail.com"
// Object.freeze(JsUser)
JsUser.email="marooshch@gmail.com"
console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo=function(){
    console.log( `Hello Js User  ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());










