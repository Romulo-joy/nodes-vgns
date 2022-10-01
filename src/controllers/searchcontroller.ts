import {Request, Response } from "express";
import { local } from "../helpers/models/local";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if (!query){
        res.redirect('/');
        return;
    }

    let list = local.getFromName(query);

    res.render('page/page', {
        menu: createMenuObject(''),
        list,
        query,
    }); 
};