import { Model, ModelStatic, Optional, WhereAttributeHashValue } from "sequelize";
import { DataTypes } from "sequelize";

export default class DatabaseService {

    // Note if a cascade has been set on one table, all related tables will also drop
     // drop is a sync method
    static dropTable(model: ModelStatic<Model<any,any>>, confirmDrop: Boolean)
    : void {
        if(confirmDrop) {
            model.drop();
        }
    }

    static async getAllData(model: ModelStatic<Model<any, any>>)
    : Promise<Model<any, any>[] | undefined> {
        try {
            let result = await model.findAll();
            return result ? result : [ model.build() ];
        } catch(err) {
            console.error(err);
            throw new Error(err!.toString());
        }
    }

    static async getDataById(model: ModelStatic<Model<any, any>>, id: string)
    : Promise<Model<any, any> | undefined> {
        try {
            // if the instance id does not exist, return new instance model
            let result = await model.findByPk(parseInt(id));
            return result ? result: model.build();
        } catch(err) {
            console.error(err);
            throw new Error(err!.toString());
        }
    }

    static async getAllDataByFKId(model: ModelStatic<Model<any, any>>, id: string, fkName: string)
    : Promise<Model<any, any>[] | undefined> {
        try {
            let result = await model.findAll({
                where: { [fkName]: id }
            });
            return result ? result : [ model.build() ];
        } catch(err) {
            console.error(err);
            throw new Error(err!.toString());
        }
    }

    static async createModel(model: ModelStatic<Model<any, any>>, modelData: Optional<any, string>)
    : Promise<Model<any, any> | undefined> {
        try {
            Object.keys(modelData).forEach(key =>{
                if(modelData[key] instanceof DataTypes.TEXT || 
                    modelData[key] instanceof DataTypes.STRING) {
                    modelData[key] = modelData[key].trim();
                }
            });
            let result = await model.create(modelData);
            return result ? result :  model.build();
        } catch (err) {
            console.error(err);
            throw new Error(err!.toString());
        }
    }

    static async deleteModelById(model: ModelStatic<Model<any, any>>, id: string)
    : Promise<number | undefined> {
        try {
            let result = await model.findByPk(parseInt(id));
            if(result) { 
                let num = await model.destroy({
                    where: { [model.primaryKeyAttribute]: parseInt(id) }
                });
                return num;
             } else {
                // Not Found
                return -1;
             }
        } catch(err) {
            console.error(err);
            throw new Error(err!.toString());
        }
    }

    static async updateModelById(model: ModelStatic<Model<any, any>>, id: string, modelData: Optional<any, string>) {
        try {
            let result = await model.findByPk(parseInt(id));
            if(result) {
                Object.keys(modelData).forEach(key =>{
                    if(modelData[key] instanceof DataTypes.TEXT || 
                        modelData[key] instanceof DataTypes.STRING) {
                        modelData[key] = modelData[key].trim();
                    }
                });

                let num = await model.update(modelData, {
                    where: { [model.primaryKeyAttribute]: parseInt(id) }
                });
                return num;
            } else {
                // Not Found
                return -1;
            }
        } catch(err) {
            console.error(err);
            throw new Error(err!.toString());
        }
    }
}