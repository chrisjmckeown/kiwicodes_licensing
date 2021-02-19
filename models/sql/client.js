module.exports = function (sequelize, DataTypes) {
  const Client = sequelize.define(
    'client',
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
      phone: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          len: [1, 15],
        },
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      primaryEmail: {
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
  return Client;
};
