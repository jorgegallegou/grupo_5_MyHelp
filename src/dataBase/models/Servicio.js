module.exports = (sequelize, dataTypes) => {
    const alias = "Servicios";
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
      precio: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
      descripcion: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      id_categorias_servicios: {
        type: dataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      created_at: {
        type: dataTypes.DATETIME
      },
      updated_at: {
        type: dataTypes.DATETIME
      },
    };
    const config = {
      tableName: "servicios",
      timestamps: false,
    };
    const Servicio = sequelize.define(alias, cols, config);
  
    return Servicio;
  };