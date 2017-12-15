const express = require('express');
const router = express.Router();

const Word = require('../models/wordModel');

router.post('/', function (req, res, next) {
    const word = new Word({
        word: req.body.word,
        mainImg: req.body.mainImg,
        subImg: req.body.subImg,
        wordSound: req.body.wordSound,
        sentence: req.body.sentence,
        sentenceSound: req.body.sentenceSound
    });
    word.save(function (err, result) {
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
    Word.find().exec(function (err, word) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(word);
    })
});

//get one zaal
router.get('/:id', function (req, res, next) {
    Word.findById(req.params.id, function (err, word) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(word);
    })
});

module.exports = router;