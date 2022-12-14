import { Router } from "express";
import * as pagecontroller from "../controllers/pagecontroller";
import * as searchcontroller from "../controllers/searchcontroller";

const router = Router();

router.get("/", pagecontroller.home);
router.get("/Brasil",pagecontroller.Brasil);
router.get("/EstadosUnidos",pagecontroller.EstadosUnidos);
router.get("/Europa",pagecontroller.Europa);

router.get("/search",searchcontroller.search);

export default router;



