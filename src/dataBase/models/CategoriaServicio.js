module.exports = (sequelize, DataTypes) => {
    const alias = "CategoriaServicio";
    const cols = {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
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
      tableName: "categorias_servicios",//tableName es opcional. Sequalize infiere que el nombre de la tabla corresponde al nombre del archivo.
      timestamps: false,
    };
    const CategoriaServicio = sequelize.define(alias, cols, config);
  
    return CategoriaServicio;
  };