import { DataTypes, Model, ModelStatic } from "sequelize";
import sequelize from "./sequelize";
import { AssociatedModels } from ".";

interface TempBusStopAttributes {
	busStopId: number;
	busStopName: string;
    location: JSON;
}

class TempBusStop extends Model<TempBusStopAttributes> {
    public busStopId!: string;
    public busStopName!: string;
    public location!: JSON;
}

TempBusStop.init({
    busStopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    busStopName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, { sequelize, 
	tableName: "TempBusStops",
	modelName: "TempBusStop" });

export default TempBusStop;