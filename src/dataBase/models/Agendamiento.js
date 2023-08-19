module.exports = (sequelize, DataTypes) => {
  const alias = "Agendamiento";
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
    hora: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    indicaciones: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_usuarios: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  };
  const config = {
    tableName: "agendamientos", //tableName es opcional. Sequalize infiere que el nombre de la tabla corresponde al nombre del archivo.
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  };
  const Agendamiento = sequelize.define(alias, cols, config);

  Agendamiento.associate = function (models) {
    Agendamiento.belongsToMany(models.Servicio, {
      as: "servicios",
      through: "servicios_agendamientos",
      foreignKey: "id_agendamientos",
      otherKey: "id_servicios",
      timestamps: true
    })
    Agendamiento.belongsTo(models.Usuario, {
      as: "usuarios",
      foreignKey: "id_usuarios"
    })
  }

return Agendamiento;
}