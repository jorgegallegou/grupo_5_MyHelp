module.exports = (Sequelize, DataTypes) => {
    const alias = "Usuario";
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo_identificacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero_identificacion: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATETIME
      },
      updated_at: {
        type: DataTypes.DATETIME
      },
      id_roles: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
    };
    const config = {
      tableName: "usuarios",
      timestamps: false,
    };
    const usuarios = Sequelize.define(alias, cols, config);
  
    return usuarios;
  };