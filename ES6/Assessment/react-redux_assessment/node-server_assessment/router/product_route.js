let express = require("express");
let ProductRoute = express.Router();
const ProductDataModel = require("../data-model/productdatamodel");


//localhost:9000/product/api/addProduct
ProductRoute.post("/api/addProduct", (req, res)=>{
    let product = req.body
    console.log(product);

    ProductDataModel.findOne({name:req.body.name}).then((existingProduct)=>{
        if(existingProduct) {
            console.log("Found Product", existingProduct);
            res.send(existingProduct);
        } else {
    
            //use schema to create new object
            let newProduct = new ProductDataModel(product);
            
            newProduct.save().then((newProduct)=>{
                console.log("successful add", newProduct);
                res.send(newProduct)
            }).catch((err1)=>{
                console.log("err add", err1);
                res.send("error while adding");
            })
        }
    }).catch((err)=>{
        console.log("errors: ", err);
        res.send("An Error has Occurred")
    })
})

//http://localhost:9000/product/api/getProducts
ProductRoute.get("/api/getProducts",(req, res)=>{
    ProductDataModel.find()
    .then((allProducts)=>{
        res.send(allProducts);
    })
    .catch(()=>{
        res.send("error while fetching products")
    })
})

module.exports = ProductRoute;