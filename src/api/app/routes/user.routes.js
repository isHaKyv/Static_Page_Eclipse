module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user.create);
  
    // Retrieve all Tutorials
    router.get("/", user.findAll);
  
  
    // Retrieve a single Tutorial with id_usuario
    router.get("/:id_usuario", user.findOne);
  
    // Update a Tutorial with id_usuario
    router.put("/:id_usuario", user.update);
  
    // Delete a Tutorial with id_usuario
    router.delete("/:id_usuario", user.delete);
  
    // Delete all Tutorials
    router.delete("/", user.deleteAll);
  
    app.use('/api/user', router);
  };
  