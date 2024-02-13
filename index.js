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











// const express = require('express')
// const app = express()

// let counter = 0
// let upCount = 10

// function countDown() {
//   res.send(counter)
//   upCount--
// }

// app.get('/', function (req, res) {

//   setInterval(countDown, 1000)

//   const countDown = () => {
//     res.send(counter)
//     upCount--
//   }

// })

// app.listen(3000)
















const express = require('express');
const app = express();

let counter = 0;
let upCount = 10;

function countDown(res) {
  res.send(counter.toString());
  counter++;
  upCount--;

  if (upCount === 0) {
    clearInterval(intervalId);
  }
}

app.get('/', function (req, res) {
  const intervalId = setInterval(() => countDown(res), 1000);

  res.send(counter.toString());

  req.on('close', () => {
    clearInterval(intervalId);
  });
});

app.listen(3000);
