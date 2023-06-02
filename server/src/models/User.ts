import { DataTypes, Model } from "sequelize";
import sequelize from "./sequelize";

interface UserAttributes {
	id: number;
	email: string;
	password: string;
}
class User extends Model<UserAttributes> {
	public id!: number;
	public email!: string;
}

User.init({
	id: { 
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, { sequelize, modelName: "User" })

export default User;