const router = require('express').Router();
const Exercise = require('../models/exercise.model')

router.route('/').get((req, res) => {

    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(error => res.status(400).json("Error :" + error))


})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newexercise = new Exercise({
        username,
        description,
        duration,
        date

    })

    newexercise.save()
        .then(() => res.json('Saved successfully'))
        .catch(error => res.status(400).json('Error :' + error));

})


router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(error => res.status(400).json('Error :' + error));

})

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json("Deleted successfully"))
        .catch(error => res.status(400).json('Error :' + error));
})

router.route('/:id').put((req, res) => {
    Exercise.findById(req.params.id)
        .then(exer => {
            exer.username = req.body.username;
            exer.description = req.body.description;
            exer.duration = Number(req.body.duration);
            exer.date = Date.parse(req.body.date);

            exer.save()
                .then(() => res.json("updated successfully"))
                .catch(error => res.status(400).json("error :" + error));
        })
        .catch(error => res.status(400).json("error :" + error));


})

module.exports = router;