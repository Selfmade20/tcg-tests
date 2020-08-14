const router = require('express').Router();
let User = require('../models/user.model');

router.route('/register').post(async () => {
    const email = req.body.email;
    const password = req.body.password;


    const newUser = newUser({
        email,
        password
    })
})



module.exports = router;