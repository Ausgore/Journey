import express, { NextFunction } from "express";
const router = express.Router();
import { tempuserController } from "../../controllers/tempuserController";


router.get("/:id", tempuserController.getUser)
router.get("/", tempuserController.getUsers);
router.post("/createUser", tempuserController.createUser);
router.put("/:id", tempuserController.updateUser);
router.delete("/:id", tempuserController.deleteUser);

export default router;