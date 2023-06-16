import { DataTypes, Model, ModelStatic } from "sequelize";
import sequelize from "./sequelize";
import { AssociatedModels } from ".";

interface TempUserAttributes {
	id: number;
	name: string;
	email: string;
	password: string;
}

class TempUser extends Model<TempUserAttributes> {
	public id!: number;
	public name!: string;
	public email!: string;
	public password!: string;

	// associate method to establish relationships with other models
	/* The Following is an example:
	
	static associate(models: AssociatedModels): void {
		TempUser.hasMany(models.Note, {
			foreignKey: "userId",
			onDelete: "cascade"
		});
	};
	*/
}

TempUser.init({
	id: { 
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
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
}, { sequelize, 
	tableName: "TempUsers",
	modelName: "TempUser" });

export default TempUser;
