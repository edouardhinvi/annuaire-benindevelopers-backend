/**
 * Created by edouard on 26/06/2017.
 */
var express = require('express');
var router = express.Router();
var ctrlDevelopers = require('../controllers/developers');

// Benin Developers
router.get('/developers', ctrlDevelopers.developersList);
router.post('/developers', ctrlDevelopers.developersCreate);
router.get('/developers/:developerid', ctrlDevelopers.developersReadOne);
router.put('/developers/:developerid', ctrlDevelopers.developersUpdateOne);
router.delete('/developers/:developerid', ctrlDevelopers.developersDeleteOne);

module.exports = router;