import Products from '../model/productSchema.js'


export const getProducts = async(req, res ) => {
    try{
        const product = await Products.find({});
        res.json(product);
    } catch(error){
        console.log('error: ', error.message)
    }
}