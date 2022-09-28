import {Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  res.render("pages/page", {
      menu: createMenuObject('all'),
    banner: {
      tittle: "Todos os Destinos Estão Aqui",
      background: "banner.jpg",
    },
  });
 };

export const Destinos = (req: Request, res: Response) => {
  res.render("Destinos", {
    menu: createMenuObject('all'),
    banner:{
      tittle: "Todos os Destinos Estão Aqui",
      background: "banner.jpg",
    }
  });
  };

export const Brasil = (req: Request, res: Response) => {
   res.render("Brasil" , {
    menu: createMenuObject('Brasil'),
     banner:{
      tittle: "Brasil",
      background: "Brasil.jpg",
    },
  });
};
 


export const EstadosUnidos  = (req: Request, res: Response) => {
   res.render("Estados Unidos", {
    menu: createMenuObject('EstadosUnidos'),
       banner:{
      tittle: "Eua",
      background: "EUA.JPG",
    },
  });
};


export const Europa = (req: Request, res: Response) => {
   res.render("Europa", {
    menu: createMenuObject('Europa'),
       banner:{
      tittle: "Europa",
      background: "EUROPA.jpg",
    },
  });
};


    
