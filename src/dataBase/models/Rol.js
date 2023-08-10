module.exports = (Sequelize, DataTypes) => {
    const alias = "Rol";
    const cols = {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATETIME
      },
      updated_at: {
        type: DataTypes.DATETIME
      },
    };
    const config = {
      tableName: "roles",
      timestamps: false,
    };
    const roles = Sequelize.define(alias, cols, config);
  
    return roles;
  };