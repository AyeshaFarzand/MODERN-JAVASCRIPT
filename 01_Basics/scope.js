//block scope {inner} & Global scope outer{}

//var c = 300
let a = 300


if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Ayesha"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
    
}
one()


if (true) {
    const username = "Ayesha"
    if (username === "Ayesha") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);
   

//+++++++++++ interesting example ++++++++++++++

console.log(addone(5))
function addone(num)
{
    return num+1
}

// addone(5)
addtwo(5)
const addtwo=function(num){
    return num + 2
}
