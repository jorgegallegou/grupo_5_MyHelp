module.exports = (Sequelize, DataTypes) => {
    const alias = "Tecnico";
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
      identificacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      foto: {
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
      tableName: "tecnicos",
      timestamps: false,
    };
    const tecnico = Sequelize.define(alias, cols, config);
  
    return tecnico;
  };