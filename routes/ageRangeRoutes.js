const express = require('express');
const router = express.Router();

const AgeRange = require('../models/ageRangeModel');

router.post('/', function (req, res, next) {
    const ageRange = new AgeRange({
        minAge: req.body.minAge,
        maxAge: req.body.maxAge
    });
    ageRange.save(function (err, result) {
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
    AgeRange.find().exec(function (err, ageRanges) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(ageRanges);
    })
});


module.exports = router;
