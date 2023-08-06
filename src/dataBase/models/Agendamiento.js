module.exports = (Sequelize, DataTypes) => {
    const alias = "Agendamiento";
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
      hora: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lugar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_pagos: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      id_usuarios: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      id_tecnicos: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
    };
    const config = {
      tableName: "agendamientos",
      timestamps: false,
    };
    const agendamiento = Sequelize.define(alias, cols, config);
  
    return agendamiento;
  };