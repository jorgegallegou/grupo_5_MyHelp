module.exports = (Sequelize, DataTypes) => {
    const alias = "Servicio";
    const cols = {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_categorias_servicios: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATETIME
      },
      updated_at: {
        type: DataTypes.DATETIME
      },
    };
    const config = {
      tableName: "servicios",
      timestamps: false,
    };
    const servicios = Sequelize.define(alias, cols, config);
  
    return servicios;
  };