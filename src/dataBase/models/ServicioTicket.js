module.exports = (sequelize, dataTypes) => {
    const alias = "ServiciosTickets";
    const cols = {
      id: {
        type: dataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_servicios: {
        type: dataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      id_tickets: {
        type: dataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      precio: {
        type: dataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      cantidad: {
        type: dataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
    };
    const config = {
      tableName: "servicios_tickets",
      timestamps: false,
    };
    const ServicioTicket = sequelize.define(alias, cols, config);
  
    return ServicioTicket;
  };