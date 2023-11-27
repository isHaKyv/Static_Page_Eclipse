module.exports = app => {
    const send = require("../controllers/send.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", send.create);
  
    // Retrieve all Tutorials
    router.get("/", send.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", send.findAllPublished);
  
    // Retrieve a single Tutorial with folio
    router.get("/:folio", send.findOne);
  
    // Update a Tutorial with folio
    router.put("/:folio", send.update);
  
    // Delete a Tutorial with folio
    router.delete("/:folio", send.delete);
  
    // Delete all Tutorials
    router.delete("/", send.deleteAll);
  
    app.use('/api/send', router);
  };
  