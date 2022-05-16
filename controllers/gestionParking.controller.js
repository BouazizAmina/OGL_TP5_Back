const db = require("../models");
const parking = db.parking;

exports.getAllParking = (req,res) =>{
    parking.findAll({
    }).then(data =>{
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({ message: err.message })
    });    
};

exports.getParkingByName = (req,res) =>{
    return parking.findOne({
        where : {
            nom : req.body.nom,
        }
    }).then(data =>{
      res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({ message: err.message })
    });
};