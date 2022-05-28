import express, { Request, Response } from 'express';
import user_routes from './routes/user-routes/index'
import os from "os"
const app = express()

console.log(os.cpus().length)
app.use('/user', user_routes)
app.listen(3000, () => {
    console.log("I am Listening")
})