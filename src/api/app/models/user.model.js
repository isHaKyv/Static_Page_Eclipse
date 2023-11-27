const sql = require("./db.js");
  
// constructor
const Usuarios = function(usuario) {
    this.id_usuario = usuario.id_usuario;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.correo_electronico = usuario.correo_electronico;
    this.contraseña = usuario.contraseña;
  };




  Usuarios.create = (newUsuario, result) => {
    sql.query("INSERT INTO usuarios SET ?", newUsuario, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id_usuario: res.insertId_usuario, ...newUsuario });
      result(null, { id_usuario: res.insertId_usuario, ...newUsuario });
    });
  };

Usuarios.findById_usuario = (id_usuario, result) => {
  sql.query(`SELECT * FROM usuarios WHERE id_usuario = ${id_usuario}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found usuario: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Usuarios with the id_usuario
    result({ kind: "not_found" }, null);
  });
};

Usuarios.getAll = (id_usuario, result) => {
  let query = "SELECT * FROM usuarios";

  if (id_usuario) {
    query += ` WHERE id_usuario LIKE '%${id_usuario}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuarios: ", res);
    result(null, res);
  });
};


Usuarios.updateById_usuario = (id_usuario, usuario, result) => {
  sql.query(
    "UPDATE usuarios SET id_usuario = ?, nombre = ?, apellido = ?, correo_electronico = ?, contraseña = ?, WHERE id_usuario = ?",
    [usuario.id_usuario, usuario.nombre, usuario.apellido, usuario.correo_electronico, usuario.contraseña, id_usuario],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Usuarios with the id_usuario
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated usuario: ", { id_usuario: id_usuario, ...usuario });
      result(null, { id_usuario: id_usuario, ...usuario });
    }
  );
};

Usuarios.remove = (id_usuario, result) => {
  sql.query("DELETE FROM usuarios WHERE id_usuario = ?", id_usuario, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Usuarios with the id_usuario
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted usuario with id_usuario: ", id_usuario);
    result(null, res);
  });
};

Usuarios.removeAll = result => {
  sql.query("DELETE FROM usuarios", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} usuarios`);
    result(null, res);
  });
};

module.exports = Usuarios;