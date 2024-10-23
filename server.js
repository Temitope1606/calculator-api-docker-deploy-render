const express = require('express');
const app = express();
// initialize the port
const PORT = 4000;
const calculatorRouter = require('./routes/calculator'); // importing router
app.use(express.json()); // for communicating using JSON in the server

app.use('/calculator', calculatorRouter); // this means /calculator will be part of the url
app.listen(PORT, () => {  // to start up the server
    console.log(`Server is running on port ${PORT}`);
});
// to test if it's working
app.get('/', (req, res) => {
res.status(200).json({message: 'Working well'})
});