module.exports = (sequelize, dataTypes) => {
    const alias = "ServiciosAgendamientos";
    const cols = {
      id: {
        type: dataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_agendamientos: {
        type: dataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      id_servicios: {
        type: dataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
    };
    const config = {
      tableName: "serviciosAgendamientos",
      timestamps: false,
    };
    const ServicioAgendamiento = sequelize.define(alias, cols, config);
  
    return ServicioAgendamiento;
  };