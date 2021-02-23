module.exports = function (sequelize, DataTypes) {
  const App = sequelize.define(
    'app',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      number: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          len: [1, 10],
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      helpLink: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
  App.associate = function (models) {
    App.belongsTo(models.product, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return App;
};
