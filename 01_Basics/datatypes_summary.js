// Two Types of DataTypes
// 1.Primitive =>7=>(string, number, boolean, symbol, null, undefined, bigint)
const id= symbol('123')
const anotherid= symbol('123')

console.log(id===anotherid);

const bigNumber=74323547858634724327381n



// 2. Non Primitive/Reference =>3=>(Array, objects, Functions)

const heros=["spiderman", "batman", "superman"]
let myObj{
    name="ayesha",
    age=21
}

const myfunction=function(){
    console.log("HELLO WORLD");
    
}


console.log(typeof anotherid);

// There are mainly 2 types of datatypes :
// 1. Primitive ( call by value = copy version ):
// - string =>  string 
// - number => number
// - Boolean => boolean
// - null => object
// - undefined => undefined 
// - symbol => symbol
// - Bigint  => Bigint

// 2. Non-Primitive ( reference type ):
// - Array => object 
// - Object => object
// - Function => Object Function