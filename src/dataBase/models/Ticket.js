module.exports = (Sequelize, DataTypes) => {
    const alias = "Ticket";
    const cols = {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      total: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      id_usuarios: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    };
    const config = {
      tableName: "pagos",
      timestamps: false,
    };
    const pago = Sequelize.define(alias, cols, config);
  
    return pago;
  };