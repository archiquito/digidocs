import { compareSync } from "bcrypt-ts";
import db from "./db";

type User = {
    id?: number | string;
    email: string;
    name?: string | null;
    password?: string;
}

export async function findUserCrendentials(email: string, password: string): Promise<User | null> {

    const user = await db.user.findFirst({
        where: {
            email: email,
        }
    });

    console.log({user})
    if(!user) {
        return null;
    }

    const passwordMatch =  compareSync(password, user.password);

    if(passwordMatch) {
        return user;
    }

    return null;
}