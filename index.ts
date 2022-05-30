import express, { Request, Response } from 'express';
import user_routes from './routes/user-routes/index'
import './configurations/db_connection'
const app = express()
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use('/user', user_routes)
app.listen(3000, () => {
    console.log("I am Listening")
})