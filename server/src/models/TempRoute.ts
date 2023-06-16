import { DataTypes, Model, ModelStatic } from "sequelize";
import sequelize from "./sequelize";
import { AssociatedModels } from ".";

interface TempRouteAttributes {
	routeId: number;
	routeName: string;
	startingStopId: number;
	endingStopId: number;
    duration: number;
    status: Enumerator;
}

class TempRoute extends Model<TempRouteAttributes> {
	public routeId!: number;
	public routeName!: string;
	public startingStopId!: string;
	public endingStopId!: string;
    public duration!: number;
    public status!: Enumerator;

	static associate(models: AssociatedModels): void {
        TempRoute.hasMany(models.TempBusRouteInfo, {
            foreignKey: "routeId",
			onDelete: "CASCADE"
        });
    }
}

TempRoute.init({
	routeId: { 
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	routeName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	startingStopId: {
		type: DataTypes.INTEGER,
        allowNull: false,
		references: {
			model: 'TempBusStop',
			key: 'busStopId'
		}
	},
	endingStopId: {
		type: DataTypes.INTEGER,
        allowNull: false,
		references: {
			model: 'TempBusStop',
			key: 'busStopId'
		}
	},
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("Ongoing", "Upcoming", "Under Construction", "Closed"),
        allowNull: false
    }
}, { sequelize, 
	tableName: "TempRoutes",
	modelName: "TempRoute" });

export default TempRoute;
