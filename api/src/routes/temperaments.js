const { Router } = require('express')
const { Temperament, Dog } = require('../db')
const { Op } = require('sequelize')
const axios = require('axios');
const e = require('express');
const router = Router();
//const temperamentPromise = require('../controllers/getTemperaments.controller')


router.get('/', async (req, res) => {

    let temperamentsDB = await Temperament.findAll()

    if (temperamentsDB.length === 0) {

        const { data } = await axios.get('https://api.thedogapi.com/v1/breeds')
        let temp = data.map(c => {
            return c.temperament 
        })
        let conv = temp.toString().split(","); 
        let quitarEs = conv.map(e => {
            return e.trim();
        })
        const result = quitarEs.filter((item, index) => {
            return quitarEs.indexOf(item) === index;
        })

        for (let i = 0; i < result.length; i++) {
            await Temperament.create({
                name: result[i]
            }
            )
        }

        let temperamentsDBS = await Temperament.findAll()


        return res.json(temperamentsDBS)

    }

    return res.json(temperamentsDB)
})

module.exports = router; 