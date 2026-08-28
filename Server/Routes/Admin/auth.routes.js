import { Router } from "express";
import {
  registerAdmin,
  loginAdmin,
} from "../../Admin/Auth/adminAuth.controllers.js";

const adminAuthRoutes = Router();

adminAuthRoutes.post("/register", registerAdmin).post("/login", loginAdmin);

export { adminAuthRoutes };
