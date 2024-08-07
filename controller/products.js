const PRODUCTS = require('../model/product');
module.exports = {
    getProducts: async (req, res, next) => {
        const products = await PRODUCTS.find();
        
        res.json(
           products.map(res => {
                return {
                    id: res.id,
                    name: res.name,
                    price: res.price,
                    desc: res.desc
                }
            })
        );
    },
    getProduct: async (req, res, next) => {
        const id = req.params.id;
        const product = await PRODUCTS.findById(id);



        res.status(200).json(product);
    },
    createProduct: async (req, res) => {
        const product = await new PRODUCTS({
            name: req.body.name,
            price: req.body.price,
            desc: req.body.desc
        }).save();

        res.json({ "message": "Created successfully", "id": product.id, "name": product.name });
    },

    updateProduct: async (req,res) => {
        const id = req.params.id;
        const product = await PRODUCTS.findById(id);
        if(product != null){
            if(req.body.name !== null){
                product.name = req.body.name 
            }

            if(req.body.price !== null){
                product.price = req.body.price 
            }

            if(req.body.desc !== null){
                product.desc = req.body.desc 
            }

            try {
                const updatedProduct = await product.save() //saving in DB
                res.send(updatedProduct) // sending back as response
              } catch (err) {
                res.status(400).json({ message: err.message })
              }


        }else{
            res.json({"message":"No data found"})
        }
        
    },

    detelteProduct: async (req,res) => {
        const id = req.params.id;
        const product = await PRODUCTS.findByIdAndDelete(id);

        res.json({"deleted": product});
    }

}