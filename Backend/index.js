import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';
import { connectDB } from './config/database.js';
import dotenv from 'dotenv';
import 'dotenv/config'

const app = express();
const Port = 3000;

dotenv.config(); 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

connectDB();

app.use('/api/todos', todoRoutes);



app.listen(Port,()=>{
    console.log(`Server listening on port ${Port}`);
})