const express = require("express");
const router = express.Router();

// ADDITION OPERATION
router.post("/api/calculate/add", (req, res) => {
  const { num1, num2 } = req.body; //accepting two numbers as inputs in the request body
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    res.status(400).json({ message: "Please enter valid values." });
    return;
  }
  const sum = num1 + num2;
  res.status(201).json({ message: `The Addition of ${num1} and ${num2} = ${sum}`});
});

// SUBTRACTION OPERATION
router.post("/api/calculate/subtract", (req, res) => {
    const { num1, num2 } = req.body; //accepting two numbers as inputs in the request body
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      res.status(400).json({ message: "Please enter valid values." });
      return;
    }
    const difference = num1 - num2;
    res.status(201).json({ message: `The Subtraction of ${num1} and ${num2} = ${difference}`});
  });
  
// MULTIPLICATION OPERATION
router.post("/api/calculate/multiply", (req, res) => {
    const { num1, num2 } = req.body; //accepting two numbers as inputs in the request body
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      res.status(400).json({ message: "Please enter valid values." });
      return;
    }
    const product = num1 * num2;
    res.status(201).json({ message: `The Multiplication of ${num1} and ${num2} = ${product}`});
  });  

// DIVISION OPERATION
router.post("/api/calculate/divide", (req, res) => {
    const { num1, num2 } = req.body; //accepting two numbers as inputs in the request body
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      res.status(400).json({ message: "Please enter valid values." });
      return;
    }
    if (num2 == 0) {
        res.status(400).json({message: 'Division by zero is not possible.'})
    }
    const quotient = num1 / num2;
    res.status(201).json({ message: `The Division of ${num1} by ${num2} = ${quotient}`});
  });  


// to test if it's working
// router.get('/', (req, res) => {
// res.status(400).json({message: 'Calculator; looks nice..'});
// })
module.exports = router;
