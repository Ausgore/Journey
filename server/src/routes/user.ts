import express from "express";
const router = express.Router();
import { userController } from "../../controllers/userController";

router.get("/:id", userController.getUser)
router.get("/", userController.getUsers);
router.post("/createUser", userController.createUser);
router.delete("/:id", userController.deleteUser);

export default router;