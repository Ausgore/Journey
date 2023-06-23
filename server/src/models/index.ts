export { default as sequelize } from "./sequelize";

import fs from "fs";
import path from "path";
import { Model, ModelStatic } from "sequelize";

// Custom combined type to associate models upon instantiation
// string in record refers to the model name
export type AssociatedModels =
	Record<string, ModelStatic<Model<any, any>> & {
		associate?: (models: AssociatedModels) => void; }>;

// Figure out how we can actually automatically export each model
// At the moment the models do exported automatically, just that there aren't any clear typings
const models: AssociatedModels = {};
// const models: { [key: string]: ModelStatic<Model> } = {};
const files = fs.readdirSync(__dirname).filter(file => !["index.ts", "sequelize.ts"].includes(file));
files.forEach(function(file) {
	const name = path.basename(file, ".ts");
	models[name] = require(`./${file}`).default;
});

/* Calls the static associate method for each model to 
properly initiliase the respective associations of each model */
Object.values(models).forEach(model => {
	if (model.associate) {
		model.associate(models);
	}
});

export default models;