import { Model, ModelStatic, Optional, WhereAttributeHashValue } from "sequelize";
import { DataTypes } from "sequelize";

export default class DatabaseService {

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

    static async getAllDataByFKId(model: ModelStatic<Model<any, any>>, id: string, fkName: WhereAttributeHashValue<number>)
    : Promise<Model<any, any>[] | undefined> {
        try {
            let result = await model.findAll({
                where: { fkName: id }
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
                if(typeof modelData[key] === DataTypes.TEXT.key || 
                    typeof modelData[key] === DataTypes.STRING.key) {
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
            let idExists: Boolean = false
            let result = await model.findByPk(parseInt(id));
            if(result) { 
                let num = await model.destroy({
                    where: { id: parseInt(id) }
                });
                return num;
             } else {
                return -1;
             }
        } catch(err) {
            console.error(err);
            throw new Error(err!.toString());
        }
    }
}