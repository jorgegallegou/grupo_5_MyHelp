module.exports = (sequelize, DataTypes) => {
    const alias = "ServicioAgendamiento";
    const cols = {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_agendamientos: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_servicios: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    };
    const config = {
      tableName: "servicios_agendamientos",
      timestamps: false,
    };
    const ServicioAgendamiento = sequelize.define(alias, cols, config);
  
    return ServicioAgendamiento;
  };