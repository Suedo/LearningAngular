var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var jwt = require('jwt-simple')
var app = express()

var User = require('./models/user')

var posts = [
    {message: "Hello"},
    {message: "Hi"}
]

// server@port:3000 , angular frontend@port:4200 . Hence cors is needed
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('hello world')
})

app.get('/posts', (req, res) => {
    res.send(posts)
})
app.get('/users', async (req, res) => {
    try {
        var users = await User.find({},"-password -__v")
        res.send(users)
    } catch (error) {
        console.error(error);        
        res.sendStatus(500) // internal server error
    }
})
app.get('/profile/:id', async (req, res) => {
    try {
        // `find` would give result wrapped in an array. 
        // since we will have only one match, the array makes no sense.
        // hence, we do `findById`
        var user = await User.findById({_id: req.params.id},"-password -__v")
        
        if(!user) { res.status(500).send({message: "No user with this ID"}) }
        else { 
            console.log(user);
            res.send(user) 
        }
        
    } catch (error) {
        console.error(error);        
        res.sendStatus(500) // internal server error
    }
})

app.post('/register', (req, res) => {
    var userData = req.body;
    console.log(userData.email); // prod code would have some validation logic before this

    // save to mongo
    var user = new User(userData)
    user.save((err, result) => {
        if(err) console.log("error saving user");
        res.status(200).send({message: 'user saved'})        
    })

})
app.post('/login', async (req, res) => {
    var userData = req.body;
    var user = await User.findOne({email: userData.email})
    var payload = {}
    if(!user) {
        console.log("no user found")
        res.status(401).send({message: 'no user found'})
    } else if (!(user.password === userData.password)){
        console.log("invalid password")
        res.status(401).send({ message: 'invalid password' })
    }else {
        var token = jwt.encode(payload,'123')    // in prod, the secret '123' will be something stored in a config file
        console.log(token)
        res.status(200).send({token})   
    }
    
})

// Connection URL: mongodb://<dbuser>:<dbpassword>@ds117178.mlab.com:17178/pssocial
mongoose.connect('mongodb://test:test@ds117178.mlab.com:17178/pssocial', (err) => {
    if(!err) console.log('connected to mongo');
})


app.listen(3000)
console.log("started..")