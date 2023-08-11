module.exports = (sequelize, dataTypes) => {
    const alias = "Usuarios";
    const cols = {
      id: {
        type: dataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
      image: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      tipo_identificacion: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      numero_identificacion: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
      telefono: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
      created_at: {
        type: dataTypes.DATETIME
      },
      updated_at: {
        type: dataTypes.DATETIME
      },
      id_roles: {
        type: dataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
    };
    const config = {
      tableName: "usuarios",
      timestamps: false,
    };
    const Usuario = sequelize.define(alias, cols, config);
  
    return Usuario;
  };