import {Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send("pages/page");
 };

export const Destinos = (req: Request, res: Response) => {
  res.render("Destinos", {
    banner:{
      tittle: "Todos os Destinos Estão Aqui",
      background: "banner.jpg",
    }
  });
  };

export const Brasil = (req: Request, res: Response) => {
   res.render("Brasil" , {
     banner:{
      tittle: "Brasil",
      background: "Brasil.jpg",
    },
  });
};
 


export const Estados  = (req: Request, res: Response) => {
   res.render("Estados Unidos", {
       banner:{
      tittle: "Eua",
      background: "EUA.JPG",
    },
  });
};


export const Europa = (req: Request, res: Response) => {
   res.render("Europa", {
       banner:{
      tittle: "Europa",
      background: "EUROPA.jpg",
    },
  });
};


    
