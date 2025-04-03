"use server";
import { revalidatePath } from "next/cache";
import { postFile } from "@/lib/files";
import db from "@/lib/db";

type UserFilesProps = {
    id?: number | string;
    publicId: string;
    format?: string | undefined;
    type?: string;
}

export async function saveAvatar(data: UserFilesProps) {

    await db.userFiles.create({
        data: {
            userId: "3",
            publicIdFile: data.publicId,
        },
      });

    // await postFile(data.id, data.publicId, data.format, data.type);
   // revalidatePath("/");
  }