const express = require('express');
const userRouter = require('./routes/registerRouter');
const app = express();
const  mongoose=require('mongoose');
const { loginRouter } = require('./routes/loginRouter');
const { adminRouter } = require('./Admin/adminRouter');
// const { validateRegister } = require('./middleware/userAuth');
require("dotenv").config()


const PORT = process.env.PORT



//connection to DB
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database successfully connected '))
.catch((err)=>{console.log(err)})


//middleware to parse incoming req
app.use(express.json());




//routes
app.use('/',userRouter)
app.use('/',loginRouter)
app.use('/',adminRouter)



app.get('/', (req, res, next) => {
    res.send('Server is running ');
})

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})

