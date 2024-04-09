import express, {Request, Response } from "express";
import {AppDataSource} from './src/ormconfig'
import { router } from "./src/routes/routes";

const app = express();

const PORT = 3000;

app.use('/', router);

app.listen(PORT, async()=>{
    console.log('Server is running..');
    console.log(AppDataSource);
    
    try {
        await AppDataSource.initialize();
        console.log("Database connection successful...");
      } catch (error) {
        console.error(error);
      }
})