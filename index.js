// // const express = require("express")
// // console.log("Hello World!")

// // console.log(express)


// const functionRef = () => {
//   console.log("Ref")
// } 

// /** Function to try out asynchronous programming
//  * 
//  */
// function testingAsync() {

//   console.log("Top.")

//   // asynchronous part
//   let intervalID = setInterval(functionRef, 10)

//   let count = 10
//   while (count > 0) {
//     // do nothing
//     if (count == 9) {
//       console.log("last number")
//     }
//     count--
//   }

//   console.log("Middle.")

//   // clearing the interval
//   clearInterval(intervalID)

//   console.log("Bottom.")

// }

// testingAsync()





const express = require('express')
const app = express()

app.get('/', function (req, res) {

  setTimeout(() => res.send('Hello Innovapptive'), 1500)
  
})

app.listen(3000)