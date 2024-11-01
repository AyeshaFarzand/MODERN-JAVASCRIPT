const studentId="L1F20BSSE0215"
let studentEmail="marooshch@gmail.com"
var studentPassword="54321"
studentCity="Lahore"

// studentId=L1F20BSSE0111 //not allowed

studentEmail="ayesha@gmail.com"
studentPassword="12345"
studentCity="Sargodha"

console.log(studentId);
/*
prefer not to use var
bcz of issue in block scope and functional scope
*/

console.table([studentId,studentEmail,studentPassword,studentCity])
