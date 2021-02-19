module.exports = function (sequelize, DataTypes) {
  const LicenseKeyAssignment = sequelize.define(
    'licenseKeyAssignment',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      assignmentDate: {
        type: DataTypes.DATE,
        allowNull: false,
        default: Date.now,
      },
      releaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  LicenseKeyAssignment.associate = function (models) {
    LicenseKeyAssignment.belongsTo(models.licenseKey, {
      foreignKey: {
        allowNull: true,
      },
    });
    LicenseKeyAssignment.belongsTo(models.member, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return LicenseKeyAssignment;
};
