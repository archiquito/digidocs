import db from "./db";

export async function findFiles() {
    const user = await db.user.findFirst({
       where
    });
}

export async function postFile(id: string | number | undefined, url: string, format: string | null | undefined, type: string | undefined) {
console.log({url})
    // const userFiles = await db.userFiles.create({
    //     data: {
    //         id: userId,
    //         publicId: publicId,
    //         format: format,
    //       },
    // });
}

