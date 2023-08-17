module.exports = (sequelize, DataTypes) => {
    const alias = "Rol";
    const cols = {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    };
    const config = {
      tableName: "roles", //tableName es opcional. Sequalize infiere que el nombre de la tabla corresponde al nombre del archivo.
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    };
    const Rol = sequelize.define(alias, cols, config);
  
    return Rol;
  };