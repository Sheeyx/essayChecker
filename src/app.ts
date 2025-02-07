import express from "express";
import path from "path";
import cors from "cors";


/** 1-ENTRANCE */
const app = express();
console.log("dirname",__dirname);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({credentials: true, origin: true}))

/** 2-SESSIONS */

/** 3-VIEWS */
app.set('views', path.join(__dirname, "views"));
app.set('view engine', "ejs");

/** 4-ROUTERS */ 

export default app;  