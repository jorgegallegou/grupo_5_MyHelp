module.exports = (sequelize, DataTypes) => {
    const alias = "ServicioTicket";
    const cols = {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_servicios: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_tickets: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      precio: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER.UNSIGNED,
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