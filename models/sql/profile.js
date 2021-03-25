module.exports = function (sequelize, DataTypes) {
  const Profile = sequelize.define(
    'profile',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      company: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [1, 255],
        },
      },
      website: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [1, 255],
        },
      },
      location: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [1, 255],
        },
      },
      status: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [1, 255],
        },
      },
      skills: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  Profile.associate = (models) => {
    Profile.belongsTo(models.member, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  return Profile;
};
