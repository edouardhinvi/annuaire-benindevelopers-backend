/**
 * Created by edouard on 26/06/2017.
 */
var mongoose = require('mongoose');
var Dev = mongoose.model('Developer');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};


/* GET list of developers */
module.exports.developersList = function (req, res) {
    Dev
        .find()
        .sort('fullname')
        .exec(function (err, developers) {
            if(!developers){
                sendJSONresponse(res, 204, {
                    "message": "No developer found!"
                });
                return;
            }else if(err){
                sendJSONresponse(res, 404, err);
                return;
            }
            sendJSONresponse(res, 200, developers);
        })
};


/* GET a developer by the id */
module.exports.developersReadOne = function (req, res) {
    console.log('Finding location details', req.params);
    if (req.params && req.params.developerid) {
        Dev
            .findById(req.params.developerid)
            .exec(function (err, developer) {
                if (!deevloper) {
                    sendJSONresponse(res, 404, {
                        "message": "developerid not found"
                    });
                    return;
                } else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(developer);
                sendJSONresponse(res, 200, developer);
            });
    } else {
        console.log('No developerid specified');
        sendJSONresponse(res, 404, {
            "message": "No developerid in request"
        });
    }
};

/* POST a new developer */
/* /api/v1/developers */
module.exports.developersCreate = function (req, res) {
    console.log(req.body);
    Dev.create({
        timestamp: req.body.timestamp,
        fullname: req.body.fullname,
        profession: req.body.profession,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        facebookURL: req.body.facebookURL,
        twitterURL: req.body.twitterURL,
        linkedinURL: req.body.linkedinURL,
        description: req.body.description,
        speciality: req.body.speciality,
        otherSpec: req.body.otherSpec,
        proficiencies: req.body.proficiencies,
        portfolio: req.body.portfolio,
        isStudent: req.body.isStudent,
        university: req.body.university,
        emailAddr: req.body.emailAddr,
        typeOfProfile: req.body.typeOfProfile,
        others: req.body.others

    }, function (err, developer) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            console.log(developer);
            sendJSONresponse(res, 201, developer);
        }
    });
};

/* PUT /api/v1/developers/:developerid */
module.exports.developersUpdateOne = function (req, res) {
    if (!req.params.developerid) {
        sendJSONresponse(res, 404, {
            "message": "Not found, developerid is required"
        });
        return;
    }
    Dev
        .findById(req.params.developerid)
        .exec(
            function (err, developer) {
                if (!developer) {
                    sendJSONresponse(res, 404, {
                        "message": "developerid not found"
                    });
                    return;
                } else if (err) {
                    sendJSONresponse(res, 400, err);
                    return;
                }
                developer.timestamp = req.body.timestamp;
                developer.fullname = req.body.fullname;
                developer.profession = req.body.profession;
                developer.address = req.body.address;
                developer.phone = req.body.phone;
                developer.email = req.body.email;
                developer.website = req.body.website;
                developer.facebookURL = req.body.facebookURL;
                developer.twitterURL = req.body.twitterURL;
                developer.linkedinURL = req.body.linkedinURL;
                developer.description = req.body.description;
                developer.speciality = req.body.speciality;
                developer.otherSpec = req.body.otherSpec;
                developer.proficiencies = req.body.proficiencies;
                developer.portfolio = req.body.portfolio;
                developer.isStudent = req.body.isStudent;
                developer.university = req.body.university;
                developer.emailAddr = req.body.emailAddr;
                developer.typeOfProfile = req.body.typeOfProfile;
                developer.others = req.body.others;
                developer.save(function (err, location) {
                    if (err) {
                        sendJSONresponse(res, 404, err);
                    } else {
                        sendJSONresponse(res, 200, developer);
                    }
                });
            }
        );
};

/* DELETE /api/v1/developers/:developerid */
module.exports.developersDeleteOne = function (req, res) {
    var developerid = req.params.developerid;
    if (developerid) {
        Dev
            .findByIdAndRemove(developerid)
            .exec(
                function (err, developer) {
                    if (err) {
                        console.log(err);
                        sendJSONresponse(res, 404, err);
                        return;
                    }
                    console.log("Developer id " + locationid + " deleted");
                    sendJSONresponse(res, 204, null);
                }
            );
    } else {
        sendJSONresponse(res, 404, {
            "message": "No developerid"
        });
    }
};