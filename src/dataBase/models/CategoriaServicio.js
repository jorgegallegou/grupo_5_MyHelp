module.exports = (Sequelize, DataTypes) => {
    const alias = "Categoria_Servicio";
    const cols = {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    };
    const config = {
      tableName: "categorias_servicios",
      timestamps: false,
    };
    const categorias_servicios = Sequelize.define(alias, cols, config);
  
    return categorias_servicios;
  };