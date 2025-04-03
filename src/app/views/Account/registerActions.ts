"use server";

import db from "@/lib/db";
import { genSaltSync, hashSync } from "bcrypt-ts";

export default async function registerActions(_prevState: any, formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };
  if (!data.name || !data.email || !data.password) {
   return {
    message: 'Necessário preencher todos os campos',
    success: false,
   }
  }

  const userEmail = await db.user.findUnique({
    where: {
      email: data.email,
    },
   });

  if (userEmail) {
    return {
        message: 'Email já cadastrado!',
        success: false,
       }
  }

  const salt = genSaltSync(10);

  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password, salt),
    },
  });
}
