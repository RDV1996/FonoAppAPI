const express = require('express');
const router = express.Router();

const WordPair = require('../models/wordPairModel');


router.post('/', function (req, res, next) {
    const wordPair = new WordPair({
        rightWord: req.body.rightWord,
        wrongWord: req.body.wrongWord,
        ageRange: req.body.ageRange,
        wordPairType: req.body.wordPairType
    });
    wordPair.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json(result);
    });
});

//get all gebruikers
router.get('/', function (req, res, next) {
    WordPair.find().exec(function(err, wordPair){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(wordPair);
    })
});

//get one zaal
router.get('/:id', function (req, res, next) {
    WordPair.findById(req.params.id, function(err, wordPair){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(wordPair);
    })
});

module.exports = router;