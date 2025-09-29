import fastify from "fastify";
import databaseCon from "./database/database";
import polls from "./pages/services/addNewVideo";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import uploadNewImage from "./pages/services/addNewImage";
import { getVideosForPublic } from "./public/videos";
import Notes from "./pages/notes";
import fastifyCookie from 'fastify-cookie';
import fastifyJwt from 'fastify-jwt';
import { UserRegistration } from "./pages/Users/userRegistration";
import { UserLogin } from "./pages/Users/login";
import { getAllUsers } from "./pages/Users/PrivateRoutes/allUsers";

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

const allowedOrigins = [
  "http://localhost:5173",
  "https://tasty-flax.vercel.app", // ⚠️ removed trailing space!
];

app.register(cors, {
  origin: allowedOrigins,
  credentials: true,
});

app.register(fastifyCookie);

const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
  throw new Error("JWT_SECRET environment variable is not set");
}

// ✅ Register JWT FIRST
app.register(fastifyJwt, { secret: jwtSecret });

// ✅ THEN register auth plugin (which uses jwtVerify)

// Other plugins
app.register(multipart);
app.register(polls);
app.register(uploadNewImage);
app.register(getVideosForPublic, { prefix: "/api/v1/public" });
app.register(Notes);
app.register(UserRegistration);
app.register(UserLogin);
app.register(getAllUsers);

databaseCon(app);

app.get("/", async () => {
  app.log.info("Handled / request");
  return { message: "Hello! Fastify server is running 🚀" };
});

const start = async () => {
  try {
    const port = parseInt(process.env.PORT || "10000", 10);
    const address = await app.listen({ port, host: '0.0.0.0' });
    app.log.info(`Server listening at ${address}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

if (require.main === module) {
  start();
}

export default app;