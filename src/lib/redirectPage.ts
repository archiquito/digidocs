
"use server";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import db from "./db";


export async function redirectPage() {
    const session = await getServerSession();
    if (!session) {
      return redirect("/");
    }
    console.log(session)
    console.log('email',session.user.email)
    const user = await db.user.findFirst({
        where: {
            email: session.user.email,
        }
    });
    console.log({user})
    return session;
}