import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "database/database.sqlite",
	logging: false
});

export default sequelize;