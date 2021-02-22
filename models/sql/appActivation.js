module.exports = function (sequelize, DataTypes) {
  const AppActivation = sequelize.define(
    'appActivation',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
  AppActivation.associate = function (models) {
    AppActivation.belongsTo(models.app, {
      foreignKey: {
        allowNull: true,
      },
    });
    AppActivation.belongsTo(models.member, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return AppActivation;
};
