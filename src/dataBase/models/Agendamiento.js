module.exports = (sequelize, dataTypes) => {
    const alias = "Agendamientos";
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
      hora: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      lugar: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      id_usuarios: {
        type: dataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
    };
    const config = {
      tableName: "agendamientos", //tableName es opcional. Sequalize infiere que el nombre de la tabla corresponde al nombre del archivo.
      timestamps: false,
    };
    const Agendamiento = sequelize.define(alias, cols, config);
  
    return Agendamiento;
  };