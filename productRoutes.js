const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/', productController.addProduct);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', productController.updateProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

module.exports = router;
