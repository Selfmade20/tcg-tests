const router = require('express').Router();
const User = require('../models/user.model');
const Todo = require('../models/todo.model')


router.route('/users').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/register').post(async (req, res,) => {
    const email = req.body.email;
    const password = req.body.password;


    const newUser = new User({
        email,
        password,
    })

    try{
        await newUser.save()
        return res.status(200).json("User Registered!")
    }catch (err) {
        return res.status(400).json("Error:" + err)
    }
})

router.route('/addTodo').post(async (req, res, next) => {
    const description = req.body.description;
    const status = req.body.status

    const newTodo = new Todo({
        description,
        status
    })

    try{
        await newTodo.save()
        return res.status(200).json("Added Todo!")
        next()
    }catch (err) {
        return res.status(400).json("Error:" + err)
    }
})



module.exports = router;