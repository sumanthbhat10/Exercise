const router = require('express').Router();
const User = require('../models/user.model');


router.route('/').get(
    (req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(error => res.status(400).json('Error :' + error))


    }
)

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const user = new User({
        username
    })

    user.save()
        .then(() => res.json('user added!'))
        .catch(error => res.status(400).json("Error :" + error))

})

module.exports = router;