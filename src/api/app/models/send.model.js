const sql = require("./db.js");

// constructor
const Envios = function(envio) {
    this.folio = envio.folio;
    this.fecha_creacion = envio.fecha_creacion;
    this.fecha_envio = envio.fecha_envio;
    this.fecha_entrega = envio.fecha_entrega;
    this.estado = envio.estado;
    this.direccion_envio = envio.direccion_envio;
    this.metodo_envio = envio.metodo_envio;
    this.costo_envio = envio.costo_envio;
  };



Envios.create = (newEnvio, result) => {
  sql.query("INSERT INTO envios SET ?", newEnvio, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created envio: ", { folio: res.insertFolio, ...newEnvio });
    result(null, { folio: res.insertFolio, ...newEnvio });
  });
};

Envios.findById = (folio, result) => {
  sql.query(`SELECT * FROM envios WHERE folio = ${folio}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found envio: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Envios with the folio
    result({ kind: "not_found" }, null);
  });
};

Envios.getAll = (folio, result) => {
  let query = "SELECT * FROM envios";

  if (folio) {
    query += ` WHERE folio LIKE '%${folio}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("envios: ", res);
    result(null, res);
  });
};



Envios.updateById = (folio, envio, result) => {
  sql.query(
    "UPDATE envios SET folio = ?, fecha_creacion = ?, fecha_envio = ?, fecha_entrega = ?, estado = ?, direccion_envio = ?, metodo_envio = ?, costo_envio = ?, WHERE folio = ?",
    [envio.folio, envio.fecha_creacion, envio.fecha_envio, envio.fecha_entrega, envio.estado, envio.direccion_envio, envio.metodo_envio, envio.costo_envio, folio],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Envios with the folio
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated envio: ", { folio: folio, ...envio });
      result(null, { folio: folio, ...envio });
    }
  );
};

Envios.remove = (folio, result) => {
  sql.query("DELETE FROM envios WHERE folio = ?", folio, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Envios with the folio
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted envios with folio: ", folio);
    result(null, res);
  });
};

Envios.removeAll = result => {
  sql.query("DELETE FROM envios", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} envios`);
    result(null, res);
  });
};

module.exports = Envios;