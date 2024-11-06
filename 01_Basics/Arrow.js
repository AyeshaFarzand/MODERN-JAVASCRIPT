const user = {
    username: "Ayesha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Maroosh"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Ayesha"
//     console.log(this.username);
// }

// chai()


// function chai(){
//         let username = "Ayesha"
//         console.log(this.username);
//     }
//     chai()

   const  chai= () => {
        let username = "Ayesha"
        console.log(this);
    }
    chai()

    const chai =  () => {
        let username = "Ayesha"
        console.log(this);
    }
    
    
    chai()
    
    // const addTwo = (num1, num2) => {
                                              //explicit
    //     return num1 + num2
    // }
    
    // const addTwo = (num1, num2) =>  num1 + num2
                                                                //implicit
    // const addTwo = (num1, num2) => ( num1 + num2 )
    
    const addTwo = (num1, num2) => ({username: "Ayesha"})
    
    
    console.log(addTwo(3, 4))
    
    
    // const myArray = [2, 5, 3, 7, 8]
    
    // myArray.forEach()