const Usuario = require("../models/user.model.js");

// Create and Save a new Usuario
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Usuario
  
const usuarios = new Usuario({
    id_usuario: req.body.id_usuario,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo_electronico: req.body.correo_electronico,
    contraseña: req.body.contraseña,
  });
 
  // Save Usuario in the database
  Usuario.create(usuarios, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuario.",
      });
    else res.send(data);
  });
};

// Retrieve all Usuario from the database (with condition).
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;

  Usuario.getAll(nombre, (err, data) => {
    console.log("Prueba");
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Usuario.",
      });
    else res.send(data);
  });
};

// Find a single Usuario by Id
exports.findOne = (req, res) => {
  Usuario.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Usuario with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Usuario with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// find all precio Usuario
exports.findAllPublished = (req, res) => {
  Usuario.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Usuario.",
      });
    else res.send(data);
  });
};

// Update a Usuario identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Usuario.updateById(req.params.id, new Usuario(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Usuario with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Usuario with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Delete a Usuario with the specified id in the request
exports.delete = (req, res) => {
  Usuario.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Usuario with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Usuario with id " + req.params.id,
        });
      }
    } else res.send({ message: `Usuario was deleted successfully!` });
  });
};

// Delete all Usuario from the database.
exports.deleteAll = (req, res) => {
  Usuario.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Usuario.",
      });
    else res.send({ message: `All Usuario were deleted successfully!` });
  });
};




