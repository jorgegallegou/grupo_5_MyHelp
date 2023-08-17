module.exports = (sequelize, DataTypes) => {
    const alias = "Ticket";
    const cols = {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      total: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      id_usuarios: {
        type: DataTypes.INTEGER.UNSIGNED,
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