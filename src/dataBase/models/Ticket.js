module.exports = (sequelize, dataTypes) => {
    const alias = "Tickets";
    const cols = {
      id: {
        type: dataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fecha: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
      total: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
      id_usuarios: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
    };
    const config = {
      tableName: "tickets",
      timestamps: false,
    };
    const Ticket = sequelize.define(alias, cols, config);
  
    return Ticket;
  };