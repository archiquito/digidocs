import {NextApiRequest, NextApiResponse} from "next";
import {IncomingForm} from "formidable";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function getImage(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== 'POST') {
        // Return error 
    res.status(405).json("Method not allowed for File Upload");
    }
    // Do your authentication magic here first 
    // Get the headers using req.headers.<header name> ....
    try {
        const data: { files: any } = await new Promise((resolve, reject) => {
            const form = new IncomingForm();
            form.parse(req, (err: any, fields: any, files: any) => {
                if (err) reject({err});
                resolve({files});
            });
        });

        Object.keys(data.files).forEach((key) => {
            // Here you can handle the file, e.g. save it to disk, upload to cloud storage, etc.
            console.log(`Received file ${key}:`, data.files[key]);
        });

        res.status(200).json("Successfully received file(s)");
    } catch (error: any) {
        res.status(500).json(error.message);
    }
};