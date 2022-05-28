import { Request, Response } from "express"
export const userControllers = {
    login: (req: Request, res: Response) => {
        res.send("I am login EndPoint")

    },
    signUp: (req: Request, res: Response) => {
        res.send("I am Register EndPoint")

    },
    socialLogin: (req: Request, res: Response) => {
        res.send("I am social login EndPoint")

    }
}