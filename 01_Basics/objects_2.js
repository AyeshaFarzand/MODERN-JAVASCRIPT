//singlton objects how to  declare objects with constructor
const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Ayesha"
tinderUser.isLoggedin=false

console.log(tinderUser);

const regularUser={
    email:"maroosh@gmail.com",
    fullname:{
        username:{
            firstname:"Ayesha",
            lastname:"Farzand"
        }

    }

}
console.log(regularUser.fullname.username.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"c",6:"d"}


// const obj3 =Object.assign({},obj1,obj2,obj4)
const obj3 ={...obj1,...obj2}


console.log(obj3);

const user=[
{
    id:2,
    email:"maroosh@gmail.com"
},
{
id:2,
    email:"maroosh@gmail.com"
},
{
id:2,
    email:"maroosh@gmail.com"
}
]
user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasownproperty('isLoggedin'));

//+++++++++++++++ de-structuring ++++++++++++++++++++++++

const course={
    subject:"Math",
    price:999,
    instructor:"Ayesha"
}

const {instructor}=course
console.log(instructor);


// {
//     "name":"maroosh",
//     "subject":"urdu"
//    "" price":"free"
// }


[
    {},
    {},
    {}
]

