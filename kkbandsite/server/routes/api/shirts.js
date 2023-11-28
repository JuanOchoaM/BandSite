const express = require('express');
const router = express.Router();

const Shirt = require('../../models/Shirt');

//@route POST
router.post('/', (req, res) => {
    Shirt.create(req.body)
    .then((shirt) => res.json({ msg: 'Shirt added successfully'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add this item'}));
});
//@route GET api/items/:id
router.get('/:id', (req, res) => {
    Shirt.findById(req.params.id)
    .then((shirt) => res.json(shirt))
    .catch((err) => res.status(404).json({ noitemfound: 'No Shirt found'}));
});
//@route GET api/items
router.get('/', (req, res) => {
    Shirt.find()
    .then((shirts) => res.json(shirts))
    .catch((err) => res.status(404).json({ noitemsfound: 'No Shirts found'}));
});
//@route GET api/items/:id
router.put('/:id', (req, res) => {
    Shirt.findByIdAndUpdate(req.params.id, req.body)
    .then((shirt) => res.json({ msg: 'Updated successfully'}))
    .catch((err) => 
    res.status(400).json({ error: 'Unable to update the Database' })
    );
});
//@route DELETE
router.delete('/:id', (req, res) => {
    Shirt.findByIdAndDelete(req.params.id)
    .then((shirt) => res.json({ msg: 'Shirt entry deleted successfully'}))
    .catch((err) => res.status(404).json({ error: 'No such a shirt'}));
});
module.exports = router;
