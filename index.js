/*** 

const express = require('express');
const mongoose = require('mongoose');
// const { BiBody } = require('react-icons/bi');
const app = express();

app.use(express.json())
mongoose.connect('mongodb+srv://dhimanjatin003:11%40dhiman@cluster0.qc6gt.mongodb.net/userAppnew?retryWrites=true&w=majority&appName=Cluster0')

const User = mongoose.model('Users', {name:String , email : String,
    password : String
});
app.post("/signup",async function(req,res){
    // User ka data bhjenge hm
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

// Agr wo already exist krta h to error dega
    const existingUser = await User.findOne({email:username}); //read data
    // CRUD = create read update delete
    if(existingUser){
        return res.status(400).send("User already exists")
    }
// Agr already exist nhi krta wo , new user create kr dega
    const user = new User({
        name: name,
         email: username,
          password: password 
        });
    user.save(); //create data

    res.json({
        "msg":"User created successfully"
    })

})

app.listen(3000) 

**/
// kitty.save().then(() => console.log('meow'));
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

// Middleware for parsing request bodies
app.use(bodyParser.json());
// app.use
// admin/asdasd/asde/dada/asd/as/a
app.use("/admin",adminRouter) //All the admin request please go to here
app.use("/user",userRouter) // All the user request please go to here

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});