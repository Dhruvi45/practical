import { sequelizeConnection as sequelize } from "../db/dbConnection";
import { DataTypes } from "sequelize";

export const Product = sequelize.define(
  "Product",
  {
    ProductId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    CreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Product",
    timestamps: false,
    indexes: [
      {
        name: "Product_primary_key",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ProductId" }],
      },
    ],
  }
);
