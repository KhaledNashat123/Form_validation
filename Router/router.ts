
import express from "express"
import { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get('/', async (req : Request , res: Response, next : NextFunction) =>{
    res.render("index")
})



export default router