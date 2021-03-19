module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define(
    'product',
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
      },
      helpLink: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      imageLink: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Product;
};
