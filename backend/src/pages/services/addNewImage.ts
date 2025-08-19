import { FastifyInstance } from "fastify";
import { fileUpload } from "../../controllers/fileUpload";

const uploadNewImage = (fastify: FastifyInstance) => {
    fastify.post('/upload-image', fileUpload)
};

export default uploadNewImage;
