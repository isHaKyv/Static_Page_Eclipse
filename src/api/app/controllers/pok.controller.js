const Pokemon = require("../models/pok.model.js");

// Create and Save a new Pokemon
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Pokemon
  const pokemon = new Pokemon({
    id: req.body.id,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    categoria: req.body.categoria,
  });


 

  // Save Pokemon in the database
  Pokemon.create(pokemon, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pokemon.",
      });
    else res.send(data);
  });
};

// Retrieve all Pokemon from the database (with condition).
exports.findAll = (req, res) => {
  const titulo = req.query.titulo;

  Pokemon.getAll(titulo, (err, data) => {
    console.log("Prueba");
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Pokemon.",
      });
    else res.send(data);
  });
};

// Find a single Pokemon by Id
exports.findOne = (req, res) => {
  Pokemon.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Pokemon with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Pokemon with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// find all precio Pokemon
exports.findAllPublished = (req, res) => {
  Pokemon.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Pokemon.",
      });
    else res.send(data);
  });
};

// Update a Pokemon identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Pokemon.updateById(req.params.id, new Pokemon(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Pokemon with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Pokemon with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Delete a Pokemon with the specified id in the request
exports.delete = (req, res) => {
  Pokemon.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Pokemon with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Pokemon with id " + req.params.id,
        });
      }
    } else res.send({ message: `Pokemon was deleted successfully!` });
  });
};

// Delete all Pokemon from the database.
exports.deleteAll = (req, res) => {
  Pokemon.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Pokemon.",
      });
    else res.send({ message: `All Pokemon were deleted successfully!` });
  });
};
