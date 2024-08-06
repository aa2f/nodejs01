const PRODUCTS = require('../model/product');
module.exports = {
    getProducts: async (req, res, next) => {
        const products = await PRODUCTS.find();

        res.json({
            result: products.map(res => {
                return {
                    id: res.id,
                    price: res.price,
                    desc: res.desc
                }
            })
        });
    },
    createProduct: async (req, res) => {
        const product = await new PRODUCTS({
            name: req.body.name,
            price: req.body.price,
            desc: req.body.desc
        }).save();

        res.json({ "message": "Created successfully", "id": product.id, "name": product.name });
    },

    detelteProduct: async (req,res) => {
        const id = req.params.id;
        const product = await PRODUCTS.findByIdAndDelete(id);

        res.json({"deleted": product});
    }

}