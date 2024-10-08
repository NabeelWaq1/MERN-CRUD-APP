import { createProduct, deleteProduct, getProducts, updateProduct } from "../Controller/product.controller.js";
import express from 'express';

const router = express.Router();



router.get('/', getProducts);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


export default router;