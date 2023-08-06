module.exports = (Sequelize, DataTypes) => {
    const alias = "ServicioAgendamiento";
    const cols = {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_agendamientos: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      id_servicios: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
    };
    const config = {
      tableName: "servicios_agendamientos",
      timestamps: false,
    };
    const servicios_agendamientos = Sequelize.define(alias, cols, config);
  
    return servicios_agendamientos;
  };