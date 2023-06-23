import { DataTypes, Model, ModelStatic } from "sequelize";
import sequelize from "./sequelize";
import { AssociatedModels } from ".";

interface TempBusRouteInfoAttributes {
	routeInfoId: number;
    routeId: number;
    busDriverId: number;
    timeSlot: string;
    numOfSeats: number;
    price: number;
}

class TempBusRouteInfo extends Model<TempBusRouteInfoAttributes> {
    public routeInfoId!: number;
    public routeId!: number;
    public busDriverId!: number;
    public timeSlot!: string;
    public numOfSeats!: number;
    public price!: number;

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
    },
    numOfSeats: {
        type: DataTypes.INTEGER,
        defaultValue: 24
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, { sequelize, 
	tableName: "TempBusRouteInfos",
	modelName: "TempBusRouteInfo" });

export default TempBusRouteInfo;