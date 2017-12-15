const express = require('express');
const router = express.Router();

const DisorderType = require('../models/disorderTypeModel');

router.post('/', function (req, res, next) {
    const disorderType = new DisorderType({
        name: req.body.name
    });
    disorderType.save(function (err, result) {
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
    DisorderType.find().exec(function (err, disorderType) {
        if (err) {
            return res.status(500).json({
                title: 'Er heeft zich een fout voorgedaan',
                error: err
            });
        }
        res.status(200).json(disorderType);
    })
});


module.exports = router;