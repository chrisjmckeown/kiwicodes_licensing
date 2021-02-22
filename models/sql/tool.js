module.exports = function (sequelize, DataTypes) {
  const Tool = sequelize.define(
    'tool',
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      purchaseLink: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [1, 255],
        },
      },
      helpLink: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [1, 255],
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Tool;
};
