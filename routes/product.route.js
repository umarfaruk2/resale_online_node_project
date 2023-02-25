import express from 'express';
import { create_product, delete_product, find_product_by_category, get_single_product, update_product } from '../controllers/product.controller.js';
const productRoute = express.Router();

productRoute.get('/category', find_product_by_category)

productRoute.route('/')
.post(create_product)

productRoute.patch('/update/:id', update_product)

productRoute.route('/:id')
.get(get_single_product)
.delete(delete_product)



export default productRoute;