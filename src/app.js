import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// routes import
import userRouter from "./routes/user.routes.js"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN ,
    credentials: true
}))

app.use(express.json({limit: "16kb"}));  // To handle json data
app.use(express.urlencoded({extended: true, limit: "16kb"}))  // To handle url data 
app.use(express.static("public")) // "public" folder
app.use(cookieParser())


// routes declaration
app.use("/api/v1/users", userRouter)
// http://localhost:****/api/v1/users/register

export { app };