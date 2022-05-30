import express from 'express';
import { userControllers } from '../../controllers/user-controller/index'
const user_routes = express.Router()

user_routes.post('/login', userControllers?.login)
user_routes.post('/register', userControllers?.signUp)
user_routes.post('/social-login', userControllers?.socialLogin)

export default user_routes