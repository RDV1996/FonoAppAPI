const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

//TODO we gebruiken nu deze login ipv die hierboven, is dit ok?
router.post('/signin', function (req, res, next) {
    console.log(req.body);
    User.findOne({login: req.body.login}, function(err, user){
        console.log(user);
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (user == null){
            return res.status(401).json({
                title: 'Login mislukt',
                error: {message: 'Invalid login credentials'}
            });
        }
        const token = jwt.sign({user: user}, 'FonoApp', {expiresIn:14400});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            user: user
        })
    });
});

module.exports = router;