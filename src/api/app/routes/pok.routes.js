module.exports = app => {
    const poke = require("../controllers/pok.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", poke.create);
  
    // Retrieve all Tutorials
    router.get("/", poke.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", poke.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", poke.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", poke.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", poke.delete);
  
    // Delete all Tutorials
    router.delete("/", poke.deleteAll);
  
    app.use('/api/poke', router);
  };
  