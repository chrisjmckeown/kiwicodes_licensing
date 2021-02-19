module.exports = function (sequelize, DataTypes) {
  const Error = sequelize.define(
    'error',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        default: Date.now,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      className: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      methodName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      buildNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          len: [1, 20],
        },
      },
      revitBuild: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
  Error.associate = function (models) {
    Error.belongsTo(models.app, {
      foreignKey: {
        allowNull: true,
      },
    });
    Error.belongsTo(models.member, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return Error;
};
