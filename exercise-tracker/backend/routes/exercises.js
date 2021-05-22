const router = require('express').Router();
const Exercise = require('../models/exercise.model')

router.route('/').get((req, res) => {

    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(error => res.status(400).json("Error :" + error))


})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const desciption = req.body.description
    const duration = Number(req.body.duration)
    const date = Date(req.body.date)

    const newexercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newexercise.save()
        .then(() => 'Saved successfully')
        .catch(error => res.status(400).json('Error :' + err));

})

module.exports = router;