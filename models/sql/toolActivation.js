module.exports = function (sequelize, DataTypes) {
  const ToolActivation = sequelize.define(
    'toolActivation',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      dateActivated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dateReleased: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      pcID: {
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
  ToolActivation.associate = function (models) {
    ToolActivation.belongsTo(models.tool, {
      foreignKey: {
        allowNull: true,
      },
    });
    ToolActivation.belongsTo(models.member, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return ToolActivation;
};
