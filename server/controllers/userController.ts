import { Express, Request, Response } from "express";
import DatabaseService from "../services/DatabaseService";
import User from "../src/models/User";

// user controller object
export const userController =  {

    getUser: async(req: Request, res: Response): Promise<void> => {
        let id = req.params.id
        let result = await DatabaseService.getDataById(User, id);
        if(result?.isNewRecord) {
            // Not found
            res.sendStatus(404);
        } else {
            res.json(result);
        }
    },

    getUsers: async(req: Request, res: Response): Promise<void> => {
        let result = await DatabaseService.getAllData(User);
        res.json(result); 
    },

    createUser: async(req: Request, res: Response): Promise<void> => {
        let data = req.body;
        let result = await DatabaseService.createModel(User, data)
        res.json(result);
    },

    deleteUser: async(req: Request, res: Response): Promise<void> => {
        let id = req.params.id;
        let result = await DatabaseService.deleteModelById(User, id);
        switch(result) {
            case 1: 
                res.json({
                    message: `User of id: ${id} was deleted successfuly.`
                });
                break;
            case 0:
                res.json({
                    message: `User of id: ${id} cannot be deleted.`
                });
                break
            // Not Found
            case -1:
                res.sendStatus(404);
                break;
        }
    }
}