const express = require('express');
const app = express();
const  mongoose=require('mongoose');
const {  userRouter } = require('./routes/userRouter');
const { adminRouter } = require('./Admin/adminRouter');
const prodRouter = require('./routes/productRouter');
const regRouter = require('./routes/registerRouter');
require("dotenv").config()


const PORT = process.env.PORT



//connection to DB
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database successfully connected '))
.catch((err)=>{console.log(err)})


app.use(express.json());




//routes
app.use('/',regRouter)
app.use('/',userRouter)
app.use('/',adminRouter)
app.use('/',prodRouter)




app.get('/', (req, res, next) => {
    res.send('Server is running ');
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})

