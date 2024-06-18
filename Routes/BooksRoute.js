import express from "express";
import { Addnewbook } from "../Controllers/AddnewController.js";

const router = express.Router();


router.post("/add-newbook", Addnewbook);


export default router;