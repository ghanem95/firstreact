 const router = require('express').Router();
const Exercise = require('../models/exercise.model');
let User = require('../models/user.model');

router.route('/list').get((req,res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:  '+ err));
});
router.route('/list/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('error: ' + err));
});
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser= new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req,res) =>{
    User.findById(req.params.id)
    .then(user =>{
    user.username = req.body.username;
    user.description = req.body.description;
    user.duration = Number(req.body.duration);
    user.date = Date.parse(req.body.date);

    user.save()
    .then(() => res.json('Exercise updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
})
.catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;