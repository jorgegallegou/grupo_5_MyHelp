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
      tableName: "categoria_servicios",
      timestamps: false,
    };
    const categoria_servicio = Sequelize.define(alias, cols, config);
  
    return categoria_servicio;
  };