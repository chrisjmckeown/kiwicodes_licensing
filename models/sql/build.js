module.exports = function (sequelize, DataTypes) {
  const Build = sequelize.define(
    'build',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      buildNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          len: [1, 20],
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      updates: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  Build.associate = function (models) {
    Build.belongsTo(models.tool, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return Build;
};
