import { DataTypes, Model, ModelStatic } from "sequelize";
import sequelize from "./sequelize";
import { AssociatedModels } from ".";

interface TempBusRouteInfoAttributes {
	routeInfoId: number;
    routeId: number;
    busDriverId: number;
    timeSlot: string;
}

class TempBusRouteInfo extends Model<TempBusRouteInfoAttributes> {
    public routeInfoId!: number;
    public routeId!: number;
    public busDriverId!: number;
    public timeSlot!: string;

    static associate(models: AssociatedModels): void {
        TempBusRouteInfo.belongsTo(models.TempRoute, {
            foreignKey: "routeId"
        });
    }
}

TempBusRouteInfo.init({
    routeInfoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    routeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'TempRoute',
			key: 'routeId'
        }
    },
    busDriverId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    timeSlot: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, 
	tableName: "TempBusRouteInfos",
	modelName: "TempBusRouteInfo" });

export default TempBusRouteInfo;