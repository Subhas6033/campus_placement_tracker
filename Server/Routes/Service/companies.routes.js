import { Router } from "express";
import { getCompanies } from "../../Services/Applications/companies.applications.js";

const applicationsRoutes = Router();

applicationsRoutes.get("/", getCompanies);

export { applicationsRoutes };
