const sql = require("./db.js");

// constructor
const Pokemon = function(pokemon) {
  this.id = pokemon.id;
  this.titulo = pokemon.titulo;
  this.descripcion = pokemon.descripcion;
  this.precio = pokemon.precio;
  this.categoria = pokemon.categoria;
};




Pokemon.create = (newPokemon, result) => {
  sql.query("INSERT INTO productos SET ?", newPokemon, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created pokemon: ", { id: res.insertId, ...newPokemon });
    result(null, { id: res.insertId, ...newPokemon });
  });
};

Pokemon.findById = (id, result) => {
  sql.query(`SELECT * FROM productos WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found pokemon: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Pokemon with the id
    result({ kind: "not_found" }, null);
  });
};

Pokemon.getAll = (titulo, result) => {
  let query = "SELECT * FROM productos";

  if (titulo) {
    query += ` WHERE titulo LIKE '%${titulo}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("productos: ", res);
    result(null, res);
  });
};

Pokemon.getAllPublished = result => {
  sql.query("SELECT * FROM productos WHERE precio=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("productos: ", res);
    result(null, res);
  });
};

Pokemon.updateById = (id, pokemon, result) => {
  sql.query(
    "UPDATE productos SET titulo = ?, descripcion = ?, precio = ? WHERE id = ?",
    [pokemon.titulo, pokemon.descripcion, pokemon.precio, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Pokemon with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated pokemon: ", { id: id, ...pokemon });
      result(null, { id: id, ...pokemon });
    }
  );
};

Pokemon.remove = (id, result) => {
  sql.query("DELETE FROM productos WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Pokemon with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted pokemon with id: ", id);
    result(null, res);
  });
};

Pokemon.removeAll = result => {
  sql.query("DELETE FROM productos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} productos`);
    result(null, res);
  });
};

module.exports = Pokemon;

