import { asyncHandler, APIERR, APIRES } from "../../Utils/helpers.utils.js";
import { Companies } from "../../Models/companies.models.js";
import { uploadOnCloudinary } from "../../Middlewares/uploadFile.middlewares.js";

const addCompany = asyncHandler(async (req, res) => {
  const {
    companyName,
    companyLogo,
    companyWebsite,
    industry,
    headquarters,
    description,
    foundedYear,
    isActive,
  } = req.body;

  const requiredFields = {
    companyName,
    companyLogo,
    companyWebsite,
    description,
  };

  for (const [key, value] of Object.entries(requiredFields)) {
    if (!value || value.trim() === "") {
      throw new APIERR(400, `${key} is required`);
    }
  }

  if (!req.file) throw new APIERR(400, "Company logo is required");
  const uploadedFile = await uploadOnCloudinary(req.file.path);

  const createCompany = await Companies.create({
    companyName,
    companyLogo: uploadedFile.url,
    companyWebsite,
    industry,
    headquarters,
    description,
    isActive,
  });
});

const deleteCompany = asyncHandler(async (req, res) => {});

const updateJobDetails = asyncHandler(async (req, res) => {});

export { addCompany, deleteCompany, updateJobDetails };
