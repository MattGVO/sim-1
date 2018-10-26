module.exports = {
    getAll: (req,res) =>{
        const dbInstance = req.app.get('db')
        console.log("hit the server");

        dbInstance.get_inventory()
            .then(inventory => res.status(200).send(inventory))
            .catch(err =>{
                res.status(500).send({errorMessage: "Something went wrong on our end"});
                console.log(err);
            });
    },

    addProduct: (req,res) =>{
        const dbInstance = req.app.get('db')
        const { imageUrl, productName, price } = req.body;
        
        console.log(`It's Working! It's Working!`);
        

        dbInstance.create_product([imageUrl, productName, price])
            .then( inventory => res.Status(200).send(inventory))
            .catch(err =>{
                res.status(500).send({errorMessage: "Something went wrong on our end"});
                console.log(err);
            });
    },
}