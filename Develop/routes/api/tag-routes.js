const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET all tags with associated products
router.get('/', (req, res) => {
  Tag.findALL({
    include: [
      {
        model: Product,
        through: ProductTag, // Include associated products using the ProductTag join table
      },
    ],
  })
    .then((tags) => res.status(200).json(tags)) // Return tags with associated products
    .catch((err) => res.status(500).json(err)); // Handle errors
});

// GET a single tag by ID with associated products
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id, // Find tag by ID
    },
    include: [
      {
        model: Product,
        through: ProductTag, // Include associated products using the ProductTag join table
      },
    ],
  })
    .then((tag) => res.status(200).json(tag)) // Return tag with associated products
    .catch((err) => res.status(404).json(err)); // Handle errors
});

// POST a new tag
router.post('/', (req, res) => {
  Tag.create(req.body) // Create a new tag with the provided data
    .then((tag) => res.status(200).json(tag)) // Return the created tag
    .catch((err) => res.status(404).json(err)); // Handle errors
});

// PUT update an existing tag by ID
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id, // Update tag by ID
    },
  })
    .then((tag) => res.status(200).json(tag)) // Return the updated tag
    .catch((err) => res.status(404).json(err)); // Handle errors
});

// DELETE a tag by ID
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id, // Delete tag by ID
    },
  })
    .then((tag) => res.status(200).json(tag)) // Return the deleted tag
    .catch((err) => res.status(404).json(err)); // Handle errors
});

module.exports = router;
