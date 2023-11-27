const Envios = require("../models/send.model.js");

// Create and Save a new Envios
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Envios


  const envios = new Envios({
    folio: req.body.folio,
    id_pedido: req.body.id_pedido,
    fecha_creacion: req.body.fecha_creacion,
    fecha_envio: req.body.fecha_envio,
    fecha_entrega: req.body.fecha_entrega,
    estado: req.body.estado,
    direccion_envio: req.body.direccion_envio,
    metodo_envio: req.body.metodo_envio,
    costo_envio: req.body.costo_envio,
  });

  // Save Envios in the database
  Envios.create(envios, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Envios.",
      });
    else res.send(data);
  });
};

// Retrieve all Envios from the database (with condition).
exports.findAll = (req, res) => {
  const folio = req.query.folio;

  Envios.getAll(folio, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Envios.",
      });
    else res.send(data);
  });
};

// Find a single Envios by Id
exports.findOne = (req, res) => {
  Envios.findById(req.params.folio, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Envios with folio ${req.params.folio}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Envios with folio " + req.params.folio,
        });
      }
    } else res.send(data);
  });
};

// find all precio Envios
exports.findAllPublished = (req, res) => {
  Envios.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Envios.",
      });
    else res.send(data);
  });
};

// Update a Envios identified by the folio in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Envios.updateById(req.params.folio, new Envios(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Envios with folio ${req.params.folio}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Envios with folio " + req.params.folio,
        });
      }
    } else res.send(data);
  });
};

// Delete a Envios with the specified folio in the request
exports.delete = (req, res) => {
  Envios.remove(req.params.folio, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Envios with folio ${req.params.folio}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Envios with folio " + req.params.folio,
        });
      }
    } else res.send({ message: `Envios was deleted successfully!` });
  });
};

// Delete all Envios from the database.
exports.deleteAll = (req, res) => {
  Envios.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Envios.",
      });
    else res.send({ message: `All Envios were deleted successfully!` });
  });
};