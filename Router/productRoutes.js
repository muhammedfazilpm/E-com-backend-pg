const {Router}=require('express')
const productController=require('../Controller/productController')
const cartController =require('../Controller/cartController')

const router=Router()

router.get('/',productController.getProducts)
router.get('/view',productController.productView)
router.post('/add',productController.addproduct)
router.post('/addtocart',cartController.addtoCart)

module.exports=router