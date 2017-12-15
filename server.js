const express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/APIFonoApp', {useMongoClient: true});

mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const ageRangeRoutes = require('./routes/ageRangeRoutes');
const disorderTypeRoutes = require('./routes/disorderTypeRoutes');
const userRoutes = require('./routes/userRoutes');
const wordRoutes = require('./routes/wordRoutes');
const wordPairRoutes = require('./routes/wordPairRoutes');
const wordPairTypeRoutes = require('./routes/wordPairTypeRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.static("public"));

app.use("/ageRange", ageRangeRoutes);
app.use("/disorderType", disorderTypeRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/word", wordRoutes);
app.use("/wordPairType", wordPairTypeRoutes);
app.use("/wordPair", wordPairRoutes);

const User = require('./models/userModel');
const AgeRange = require('./models/ageRangeModel');

app.get('/setup', function (req,res) {
    const agerange = new AgeRange({
        'minAge':3,
        'maxAge':4
    });
    agerange.save(function (err) {
        if(err) throw err;
        console.log("ages added");
        res.json({success:true});
    });

    const user = new User({
        'login' :'test',
        'password' : 'test',
        'isAdmin':true
    });
    user.save(function (err) {
        if(err) throw err;
        console.log("user added");
        res.json({success:true});
    })
});

app.listen(port);

console.log('SERVER IS RUNNING: ' + port);