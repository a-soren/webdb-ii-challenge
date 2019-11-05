const express = require('express');

const db = require('./data/dbConfig.js');

const server =express();

server.use(express.json());

module.exports =server;

server.get('/', (req,res)=>{
    db
    .select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error=>{
        res.status(500).json({
            error:'failed to retreive Cars Table'
        });
    });
});

server.post('/', (req,res)=>{
    if(!req.body.vin){
        return res.status(404).json({
            message:'VIN is required'
        })
    } if(!req.body.make){
        return res.status(404).json({
            message:'Make is required'
        })
    }if(!req.body.model){
        res.status(404).json({
            message:'Model is required'
        })
    } if(!req.body.mileage){
        res.status(404).json({
            message:'Mileage is required'
        })
    }
    db
    .insert(req.body, 'id')
    .into('cars')
    .then(ids => {
        res.status(200).json(ids);
    })
    .catch(error => {
        res.status(500).json({
            error:'cannot update the Information to the Cars Table'
        });
    });
});

