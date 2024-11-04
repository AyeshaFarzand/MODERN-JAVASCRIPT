// ++++++++++++++++++++++++++++++++ Date/Time ++++++++++++++++++++++++++++++++++++++
const myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);


let mycreatedDate = new Date(2024, 1, 28, 5, 3)
console.log(mycreatedDate.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getSeconds());

newDate.toLocaleString('default', {
weekday:"narrow",

})

