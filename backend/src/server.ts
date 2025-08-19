import fastify from "fastify";
import awsLambdaFastify from "@fastify/aws-lambda";
import databaseCon from "./database/database";
import polls from "./pages/services/addNewVideo";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import uploadNewImage from "./pages/services/addNewImage";
import { getVideosForPublic } from "./public/videos";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        levelFirst: true,
        translateTime: "HH:MM:ss",
        ignore: "pid,hostname",
      },
    },
  },
});

// ✅ CORS
app.register(cors, {
  origin: process.env.NODE_ENV === "production" 
    ? "*"                   // On Vercel allow all (or restrict to your frontend domain)
    : "http://localhost:5173", // Local React frontend
  credentials: true,
});

// ✅ Plugins
app.register(multipart);
app.register(polls);
app.register(uploadNewImage);
app.register(getVideosForPublic, { prefix: "/api/v1/public" });

// ✅ Database connection
databaseCon(app);

// ✅ Example route
app.get("/", async () => {
  app.log.info("Handled / request");
  return { message: "Hello! Fastify server is running 🚀" };
});

// ✅ Local development only
if (process.env.NODE_ENV !== "production") {
  const start = async () => {
    try {
      const address = await app.listen({ port: 3000, host: "0.0.0.0" });
      app.log.info(`Server listening at ${address}`);
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  start();
}

// ✅ Export handler for Vercel (serverless)
export const handler = awsLambdaFastify(app);
