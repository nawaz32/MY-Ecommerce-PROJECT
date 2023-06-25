import express from 'express';
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js';
import { brainTreePaymentController, braintreeTokenController, createProductController, 
    deleteProductController,
    getProductController, 
    getSingleProductController, 
    prodctFiltersController, 
    productCategoryController, 
    productCountCountroller, 
    productListCountroller, 
    productPhotoController,
     relatedProductController,
     searchProductCountroller,
     updateProductControlle} from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router()

//routes
router.post('/create-product',requireSignin,isAdmin,formidable(), createProductController)

// get products 

router.get('/get-product',getProductController)

// single product 

router.get('/get-product/:slug',getSingleProductController)

//get photo 

router.get('/product-photo/:pid',productPhotoController)

//delete product 
router.delete('/delete-product/:pid',deleteProductController)

// update product
router.put('/update-product/:pid',requireSignin,isAdmin,formidable(), updateProductControlle)

//price filters 
router.post('/product-filters',prodctFiltersController)

//product count 
router.get('/product-count',productCountCountroller)

//product per page count
router.get('/product-list/:page',productListCountroller)

// seacrh product route

router.get("/search/:keyword",searchProductCountroller)

// product similar routes

router.get('/rrelated-product/:pid/:c:id', relatedProductController)

//category wise product getting

router.get('/product-category/:slug',productCategoryController)

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignin, brainTreePaymentController);



export default router;