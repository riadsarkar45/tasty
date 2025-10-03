import { FastifyReply, FastifyRequest } from "fastify";
import cloudinary from "../../cloudinary";

interface CloudinaryUploadResult {
    secure_url: string;
    public_id: string;
}

export const fileUpload = async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
        const file = await req.file();
        if (!file) {
            reply.status(400).send({ success: false, message: "No file uploaded" });
            return;
        }

        const uploadResult: CloudinaryUploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "fastify_uploads" },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result as CloudinaryUploadResult);
                }
            );

            file.file.pipe(uploadStream);
        });

        reply.status(200).send({
            success: true,
            url: uploadResult.secure_url,
            public_id: uploadResult.public_id,
        });
    } catch (err: unknown) {
        req.log.error({ err }, "File upload failed");

        reply.status(500).send({
            success: false,
            message: "Failed to upload file. Please try again later.",
        });
    }
};
