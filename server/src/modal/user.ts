import { sequelizeConnection as sequelize } from "../db/dbConnection";
import { DataTypes } from "sequelize";

export const User = sequelize.define(
  "User",
  {
    UserId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "User",
    timestamps: false,
    indexes: [
      {
        name: "User_primary_key",
        unique: true,
        using: "BTREE",
        fields: [{ name: "UserId" }],
      },
    ],
  }
);
