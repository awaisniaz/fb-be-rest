import { Request, Response } from "express"
import { commonFunction } from '../../utils/utitlities'
export const userControllers = {
    login: (req: Request, res: Response) => {
        res.send({ ...req?.body })

    },
    signUp: (req: Request, res: Response) => {
        const hashpassword = commonFunction?.passwordHash(req?.body?.password)
        res.send({ ...req?.body, password: hashpassword })

    },
    socialLogin: (req: Request, res: Response) => {
        res.send("I am social login EndPoint")

    }
}