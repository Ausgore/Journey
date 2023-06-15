import { DataTypes, Model, ModelStatic } from "sequelize";
import sequelize from "./sequelize";
import { AssociatedModels } from ".";

interface UserAttributes {
	id: number;
	email: string;
	password: string;
}

class User extends Model<UserAttributes> {
	public id!: number;
	public email!: string;

	// associate method to establish relationships with other models
	/* The Following is an example:
	
	static associate(models: AssociatedModels): void {
		User.hasMany(models.Note, {
			foreignKey: "userId",
			onDelete: "cascade"
		});
	};
	*/
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
