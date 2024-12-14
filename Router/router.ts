import express from "express"
import { Request, Response, NextFunction } from "express";
import {Inputs_validation }from "../Controllers/validation";
import { validationResult } from "express-validator";

const router = express.Router();

router.get('/', async (req : Request , res: Response, next : NextFunction) =>{
    res.render("index");
})

router.post('/' , Inputs_validation() , (req : Request , res: Response , next : NextFunction)=>{
    const err = validationResult(req)
    if(!err.isEmpty()){
        res.render('index' , {
            errors : err.array()
        });
    }
    else {
        res.send("SUCCESSFUL")
    }
})


export default router