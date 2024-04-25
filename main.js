const express = require('express');
const userRouter = require('./routes/userRouter');
const app = express();
const bodyParser = require('body-parser');
const  mongoose=require('mongoose');
// const { loginRouter } = require('./routes/loginRouter');
require("dotenv").config()


const PORT = process.env.PORT



//connection to DB
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database successfully connected '))
.catch((err)=>{console.log(err)})

//middleware connection 
app.use(bodyParser.json());
// app.use(express.json());


//routes
app.use('/', userRouter)
// app.use('/',loginRouter)



app.get('/', (req, res, next) => {
    res.send('Server is running ');
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})

