import bcrypt from 'bcrypt'
export const commonFunction = {
    passwordHash: (value: string) => {
        const hash = bcrypt.hashSync(value, 10);
        return hash
    }
}