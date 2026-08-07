import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/auth.routes.js";
import { applicationsRoutes } from "./Routes/companies.routes.js";

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

// Custom api routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/applications", applicationsRoutes);

export { app };
