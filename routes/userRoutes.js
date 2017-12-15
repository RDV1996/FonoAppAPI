const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

router.post('/', function (req, res, next) {
    const user = new User({
        login: req.body.login,
        password: req.body.password,
        isAdmin : req.body.isAdmin
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json(result);
    });
});

//get all users
router.get('/', function (req, res, next) {
    User.find().exec(function(err, user){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(user);
    })
});

//get one user
router.get('/:id', function (req, res, next) {
    User.findById(req.params.id, function(err, user){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json({
            message: 'Gelukt!',
            obj: user
        });
    })
});

module.exports = router;