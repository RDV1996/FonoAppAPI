const express = require('express');
const router = express.Router();

const WordPairType = require('../models/wordPairTypeModel');

router.post('/', function (req, res, next) {
    const wordPairType = new WordPairType({
        from: req.body.from,
        to: req.body.to,
        disorderType: req.body.disorderType
    });
    wordPairType.save(function (err, result) {
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
    WordPairType.find().exec(function(err, wordPairType){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(wordPairType);
    })
});

//get one zaal
router.get('/:id', function (req, res, next) {
    WordPairType.findById(req.params.id, function(err, wordPairType){
        if (err){
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json({
            message: 'Gelukt!',
            obj: wordPairType
        });
    })
});

module.exports = router;