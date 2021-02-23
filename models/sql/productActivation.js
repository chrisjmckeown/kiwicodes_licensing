module.exports = function (sequelize, DataTypes) {
  const ProductActivation = sequelize.define(
    'productActivation',
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
        allowNull: true,
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
  ProductActivation.associate = function (models) {
    ProductActivation.belongsTo(models.product, {
      foreignKey: {
        allowNull: true,
      },
    });
    ProductActivation.belongsTo(models.member, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return ProductActivation;
};
