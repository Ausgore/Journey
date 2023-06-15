import { sequelize } from "./models";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

sequelize.sync({ alter: false }).then(function() {
	app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));
});

app.get("/", function(req, res) {
	res.send("First page.");
});

import route from "./routes/route";
app.use("/route", route);

// Test Example for User with Controllers and Database Service
import user from "./routes/user";
app.use("/user", user);