import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// App middlewares
app.use(
  cors({
    origin: [process.env.CORS_ORIGIN],
  }),
);

app.use(express.urlencoded({ limit: "100kb", extended: true }));
app.use(express.json({ limit: "50kb" }));
app.use(cookieParser());

export { app };
