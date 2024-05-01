// Import required modules
const router = require('express').Router(); // Import Express Router
const { Category, Product } = require('../../models'); // Import Category and Product models from '../../models'

// The `/api/categories` endpoint

// GET endpoint for retrieving all categories with their associated products
router.get('/', (req, res) => {
    Category.findAll({ 
      include: [Product], 
    })
    .then((categories) => res.json(categories)) 
    .catch((err) => res.status(500).json(err)); 
});

// GET endpoint for retrieving a specific category with its associated products
router.get('/:id', (req, res) => {
    Category.findOne({ 
      where: {
        id: req.params.id, 
      },
      include: [Product], 
    })
    .then((category) => res.json(category)) 
    .catch((err) => res.status(400).json(err)); 
});

// POST endpoint for creating a new category
router.post('/', (req, res) => {
    Category.create(req.body) 
    .then((category) => res.status(200).json(category)) 
    .catch((err) => res.status(400).json(err)); 
});

// PUT endpoint for updating an existing category
router.put('/:id', (req, res) => {
    Category.update(req.body, { 
      where: {
        id: req.params.id, 
      },
    })
    .then((category) => res.status(200).json(category)) 
    .catch((err) => res.status(400).json(err)); 
});

// DELETE endpoint for deleting a category
router.delete('/:id', (req, res) => {
    Category.destroy({ 
      where: {
        id: req.params.id, 
      },
    })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

// Export the router object for use in other parts of the application
module.exports = router;
