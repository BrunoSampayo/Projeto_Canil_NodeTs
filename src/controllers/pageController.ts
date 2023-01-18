import { Request,Response } from "express";

export const home = (req:Request, res:Response) =>{

    res.render ("pages/page")
}
export const dogs = (req:Request, res:Response) =>{
    res.render("dogs")

    //Res.render ("pages/page")
}
export const cats = (req:Request, res:Response) =>{
    res.render("cats")
    //Res.render ("pages/page")
}
export const fishes = (req:Request, res:Response) =>{
    res.render("fishes")
    //Res.render ("pages/page")
}