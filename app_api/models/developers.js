/**
 * Created by edouard on 26/06/2017.
 */
var mongoose = require('mongoose');

var developersSchema = new mongoose.Schema({
    timestamp: {
        type: String
    },
    fullname: {
        type: String
    },
    profession: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    website: {
        type: String
    },
    facebookURL: {
        type: String
    },
    twitterURL: {
        type: String
    },
    linkedinURL: {
        type: String
    },
    description: {
        type: String
    },
    speciality: {
        type: String
    },
    otherSpec: {
        type: String
    },
    proficiencies: {
        type: String
    },
    portfolio: {
        type: String
    },
    isStudent: {
        type: String
    },
    university: {
        type: String
    },
    emailAddr: {
        type: String
    },
    typeOfProfile: {
        type: String
    },
    others: {
        type: String
    }
});

mongoose.model('Developer', developersSchema, 'benindeveloperscol');