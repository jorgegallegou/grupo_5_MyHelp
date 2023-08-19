module.exports = (sequelize, DataTypes) => {
  const alias = "Usuario";
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
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
    id_roles: {
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
    tableName: "usuarios",
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  };
  const Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Agendamiento, {
      as: "agendamientos",
      foreignKey: "id_usuarios"
    })
    Usuario.hasMany(models.Ticket, {
      as: "tickets",
      foreignKey: "id_usuarios"
    })
    Usuario.belongsTo(models.Rol,{
      as: "roles",
      foreignKey: "id_roles"
    })
  }

  return Usuario;
};
