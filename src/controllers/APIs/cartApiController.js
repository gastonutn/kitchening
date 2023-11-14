const db = require('../../database/models')
const getCart = (req,res) => {
    try {
        if(!req.session.cart){
            let error = new Error
            error.message = 'error al cargar el carrito',
            error.status = 404
            throw error
        }

        return res.status(200).json({
            ok:true, 
            data : req.session.cart
        })

        
    } catch (error) {
        return res.status(error.status || 500 ).json({
            ok: false,
            msg: error.message || 'upss error'
        })
       
    }
}
const addItemToCart = async (req,res) => {
    try {
        const {quantity,order,product:id} = req.body

        const {title,price,discount,images} =await db.Product.findByPk(product,{
            include : ['images']
        })

        req.session.cart.products = req.session.cart.products.push({
            title,
            price,
            discount,
            image : images.find(image => image.main).file,
            quantity :quantity || 1
        })
        req.session.cart.total = req.session.cart.products.map(product => product.price).reduce((a,b) => a + b, 0) 
        return res.status(200).json({
            ok:true, 
            data : req.session.cart
        })
    } catch (error) {
        return res.status(error.status || 500 ).json({
            ok: false,
            msg: error.message || 'upss error'
        })
    }
}



module.exports = {
    getCart,
    addItemToCart
}