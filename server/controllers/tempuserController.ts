import { Express, Request, Response } from "express";
import DatabaseService from "../services/DatabaseService";
import TempUser from "../src/models/TempUser";

// user controller object
// Note: Controllers should implement 
export const tempuserController =  {

    getUser: async(req: Request, res: Response): Promise<void> => {
        let id = req.params.id
        let result = await DatabaseService.getDataById(TempUser, id);
        if(result?.isNewRecord) {
            // Not found
            res.sendStatus(404);
        } else {
            res.json(result);
        }
    },

    getUsers: async(req: Request, res: Response): Promise<void> => {
        let result = await DatabaseService.getAllData(TempUser);
        res.json(result); 
    },

    createUser: async(req: Request, res: Response): Promise<void> => {
        let data = req.body;
        let result = await DatabaseService.createModel(TempUser, data)
        res.json(result);
    },

    updateUser: async(req: Request, res: Response): Promise<void> =>{
        let id = req.params.id;
        let data = req.body;
        let result = await DatabaseService.updateModelById(TempUser, id, data);
        if(result == 1) {
           res.json({
                message: `User of id: ${id} was updated successfuly.`
            });
        } else if(result == 0){
            res.json({
                    message: `User of id: ${id} cannot be updated.`
                });
        } else {
            res.sendStatus(404);
        }
    },

    deleteUser: async(req: Request, res: Response): Promise<void> => {
        let id = req.params.id;
        let result = await DatabaseService.deleteModelById(TempUser, id);
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