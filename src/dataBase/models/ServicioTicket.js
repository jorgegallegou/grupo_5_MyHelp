module.exports = (Sequelize, DataTypes) => {
    const alias = "ServicioTicket";
    const cols = {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_servicios: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      id_tickets: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      precio: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
    };
    const config = {
      tableName: "servicios_tickets",
      timestamps: false,
    };
    const servicios_tickets = Sequelize.define(alias, cols, config);
  
    return servicios_tickets;
  };