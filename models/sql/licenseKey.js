module.exports = function (sequelize, DataTypes) {
  const LicenseKey = sequelize.define(
    'licenseKey',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      guid: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      orderID: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      expiryDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      licenseCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  LicenseKey.associate = function (models) {
    LicenseKey.belongsTo(models.client, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return LicenseKey;
};
