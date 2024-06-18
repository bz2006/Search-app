import express  from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import cors from "cors"
import connectdb from "./config/db.js";
import bodyParser from 'body-parser';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import SearchRoute from "./Routes/SearchRoute.js"
import BooksRoute from "./Routes/BooksRoute.js"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();
const app = express()
connectdb();
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend/build")))
app.use(express.static(path.join(__dirname, 'frontend', 'public')));
app.use("/sa-api/v1/search", SearchRoute);
app.use("/sa-api/v1/books", BooksRoute);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('****Server Started on '+process.env. DEV_MODE +" Mode PORT:"+ PORT+"****")
})