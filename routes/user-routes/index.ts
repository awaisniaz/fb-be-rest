import express from 'express';
import { userControllers } from '../../controllers/user-controller/index'
const user_routes = express.Router()

user_routes.get('/login', userControllers?.login)
user_routes.get('/register', userControllers?.signUp)
user_routes.get('/social-login', userControllers?.socialLogin)

export default user_routes