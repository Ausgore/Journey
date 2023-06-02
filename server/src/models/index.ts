export { default as sequelize } from "./sequelize";

import fs from "fs";
import path from "path";
import { Model, ModelStatic } from "sequelize";

// Figure out how we can actually automatically export each model
// At the moment the models do exported automatically, just that there aren't any clear typings
const models: { [key: string]: ModelStatic<Model> } = {};
const files = fs.readdirSync(__dirname).filter(file => !["index.ts", "sequelize.ts"].includes(file));
files.forEach(function(file) {
	const name = path.basename(file, ".ts");
	models[name] = require(`./${file}`).default;
});

export default models;