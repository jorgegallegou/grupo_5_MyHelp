module.exports = (sequelize, dataTypes) => {
    const alias = "Roles";
    const cols = {
      id: {
        type: dataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: dataTypes.DATETIME
      },
      updated_at: {
        type: dataTypes.DATETIME
      },
    };
    const config = {
      tableName: "roles",//tableName es opcional. Sequalize infiere que el nombre de la tabla corresponde al nombre del archivo.
      timestamps: false,
    };
    const Rol = sequelize.define(alias, cols, config);
  
    return Rol;
  };