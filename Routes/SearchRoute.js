import express from "express";
import { BookSearch } from "../Controllers/SearchController.js";

const router = express.Router();


router.get("/search-book", BookSearch);


export default router;