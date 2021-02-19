module.exports = function (sequelize, DataTypes) {
  const AppChat = sequelize.define(
    'appChat',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        default: Date.now,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      lastName: {
        type: DataTypes.STRING(255),
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
      like: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  AppChat.associate = function (models) {
    AppChat.belongsTo(models.app, {
      foreignKey: {
        allowNull: true,
      },
    });
    AppChat.belongsTo(models.member, {
      foreignKey: {
        allowNull: true,
      },
    });
    AppChat.belongsTo(models.appChat, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return AppChat;
};
