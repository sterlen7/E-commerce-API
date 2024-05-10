const express = require('express');
const userRouter = require('./routes/registerRouter');
const app = express();
const  mongoose=require('mongoose');
const { loginRouter } = require('./routes/userRouter');
const { adminRouter } = require('./Admin/adminRouter');
const prodRouter = require('./routes/productRouter');
require("dotenv").config()


const PORT = process.env.PORT



//connection to DB
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database successfully connected '))
.catch((err)=>{console.log(err)})


//middleware to parse json bodies of incoming reques
app.use(express.json());




//routes
app.use('/',userRouter)
app.use('/',loginRouter)
app.use('/',adminRouter)
app.use('/',prodRouter)




app.get('/', (req, res, next) => {
    res.send('Server is running ');
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})

