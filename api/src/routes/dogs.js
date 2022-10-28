const { Router } = require('express')
const { Dog, Temperament } = require('../db')
const { Op } = require('sequelize')
const axios = require('axios');

const router = Router();


router.get('/', async (req, res) => {
    let { name } = req.query
    if (!name) {

        axios.get('https://api.thedogapi.com/v1/breeds').then(async ({ data }) => {
            const allDogs = data.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    image: e.image.url,
                    height: e.height.metric,
                    weight: e.weight.metric,
                    temperament: e.temperament,
                    lifeSpan: e.life_span,
                    originApi: true,

                }
            })

            const DB = Dog.findAll().then((rta) => {

                return res.json([...allDogs, ...rta]);
            })
        })

    } else {
        const { data } = await axios.get('https://api.thedogapi.com/v1/breeds')
        const byName = data.filter(dog => {
            let normal = dog.name
            let toLower = dog.name.toLowerCase()
            if (toLower.includes(name) === true) {
                return toLower.includes(name)
            } else {
                return normal.includes(name)
            }
        })

        const respuesta = byName.map(e => {
            return {
                id: e.id,
                name: e.name,
                image: e.image.url,
                height: e.height.metric,
                weight: e.weight.metric,
                temperament: e.temperament,
                lifeSpan: e.life_span,
                originApi: true,

            }
        })
        const dogsDB = await Dog.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })

        console.log(dogsDB)
        res.json([...respuesta, ...dogsDB]) //todo lo que se maneja en el front es un arreglo 
        //por qué un array?
    }

})

router.get('/:id', async (req, res) => {

    // arreglo vacio que guarda las propiedades que la persona escogió
    let arr = []
    // for in para evaluar que los parametros del query vengan en verdadero.
    //for in para recorrer el objeto query.
    for (const property in req.query) {
        //constante property es la propiedad
        //query objeto completo   
        if (req.query[property] == 'true') {
            //nombre de la propiedad.
            arr.push(property)
        }
    }
    //qué es la propiedad?

    const { data } = await axios.get('https://api.thedogapi.com/v1/breeds')
    const id = req.params.id
    const byId = await data.filter(doggy => {
        return doggy.id == id
    })

    if (byId.length === 0) {
        const rtaDB = await Dog.findAll({
            where: {
                id: id
            }
        })
        if (rtaDB.length > 0) {
            return res.status(201).json([rtaDB[0]]) //porque estamos devolviendo el nombre
        }

    }

    const result = byId.map(e => {


        return {
            id: e.id,
            name: e.name,
            image: e.image.url,
            height: e.height.metric,
            weight: e.weight.metric,
            temperament: e.temperament,
            lifeSpan: e.life_span,

        }


    })
    // respueta personalizada.
    const rta = result.map(element => {
        let obj = {};
        //crear un objeto que va a hacer el contenedor de lo que se devuelve.
        for (const key in element) {
            //element es el objeto que se retorna generalmente
            for (let i = 0; i < arr.length; i++) {
                //recorre lo que mando en true, las propiedades que la persona quiere ver.
                if (key == arr[i]) {
                    //si es así guarde la llave y el valor.   
                    obj = {
                        ...obj,
                        [key]: element[key] //key //valor 
                    }
                }

            }


        }

        return obj

    })

    return arr.length > 0 ? res.json(rta) : res.json(result)



})


router.post('/', async (req, res) => {

    const recibirRaza = req.body



    let act = await Dog.create({
        name: recibirRaza.name,
        image: recibirRaza.image,
        height: recibirRaza.height,
        weight: recibirRaza.weight,
        temperament: recibirRaza.temperament,
        lifeSpan: recibirRaza.lifeSpan,
        originApi: false,

    });

    //let cons = await Dog.findAll()


    return res.json(act)

})

router.delete('/:id', async (req, res) => {

    let { id } = req.params

    let result = await Dog.destroy({

        where: {
            id: id
        }
    })
    res.send('Prueba')
})

router.put('/:id', async (req, res) => {

    let { id } = req.params
    let { name } = req.query

    let rta = await Dog.update(
        {
            name: name
        },
        {
            where: {
                id: id
            }
        }
    )

    res.json(rta)

});


module.exports = router;