let mongoose = require("mongoose");

 

// Connecting mongoDB Database

mongoose.connect("mongodb+srv://ashifhussain:neKHxZEZvEvQszbE@ashifcluster.vonhh2o.mongodb.net/E-Shop")

  .then((x) => {

    console.log( `Connected to Mongo! Database name: "${x.connections[0].name}"`);

  })

  .catch((err) => {

    console.error("Error connecting to mongo", err.reason);

});

 