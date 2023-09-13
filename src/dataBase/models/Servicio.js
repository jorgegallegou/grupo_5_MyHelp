module.exports = (sequelize, DataTypes) => {
  const alias = 'Servicio';
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
    precio: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion_general: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_categorias_servicios: {
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
    tableName: 'servicios',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  };
  const Servicio = sequelize.define(alias, cols, config);

  Servicio.associate = function (models) {
    Servicio.belongsToMany(models.Agendamiento, {
      as: 'agendamientos',
      through: 'servicios_agendamientos',
      foreignKey: 'id_servicios',
      otherKey: 'id_agendamientos',
      timestamps: true,
    });
    Servicio.belongsToMany(models.Ticket, {
      as: 'tickets',
      through: 'servicios_tickets',
      foreignKey: 'id_servicios',
      otherKey: 'id_tickets',
      timestamps: true,
    });
    Servicio.belongsTo(models.CategoriaServicio, {
      as: 'categorias',
      foreignKey: 'id_categorias_servicios',
    });
  };

  return Servicio;
};
