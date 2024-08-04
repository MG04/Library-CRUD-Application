import { Sequelize, DataTypes, Model } from "sequelize";
import { PostgresDialect } from "@sequelize/postgres";

const sequelize = new Sequelize({
  host: "172.17.0.2",
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: false,
  },
  logging: false,
  database: "dev",
  username: "postgres",
  password: "root",
});

export default class book extends Model {}

book.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    cover: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize,
    modelName: "book",
  }
);
