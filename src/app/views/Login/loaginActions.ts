'use Client'
import db from "@/lib/db";
import { useSession, signIn, signOut } from "next-auth/react"
import { genSaltSync, hashSync } from "bcrypt-ts";

type User = {
    id?: number | string;
    email: string;
    name?: string | null;
    password?: string;
}

export default async function loginActions(email: string, password: string) {
    const data = {
        email: email,
        password: password,
    }
   
       const res:any = await signIn('credentials', {redirect: false, ...data});
       console.log(res)
        if(!res.ok) {
            return { success: false, message: 'Dados incorretos"' }
        }
        return { success: true}
       

}
