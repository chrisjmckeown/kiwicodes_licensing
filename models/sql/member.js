module.exports = function (sequelize, DataTypes) {
  const Member = sequelize.define(
    'member',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [1, 255],
        },
      },
      lastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [1, 255],
        },
      },
      role: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          len: [1, 10],
        },
        defaultValue: 'user',
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      avatar: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 255],
        },
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  Member.associate = function (models) {
    Member.belongsTo(models.client, {
      foreignKey: {
        allowNull: true,
      },
    });
    Member.hasMany(models.licenseKeyAssignment);
  };
  return Member;
};
