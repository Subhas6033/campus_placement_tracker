import { asyncHandler, APIERR, APIRES } from "../../Utils/helpers.utils.js";
import { Companies } from "../../Models/companies.models.js";

const getCompanies = asyncHandler(async (req, res) => {
  const page = Math.max(Number(req.query.page) || 1, 1);
  const limit = Math.min(Number(req.query.limit) || 10, 100);
  const skip = (page - 1) * limit;

  const [companies, totalCompanies] = await Promise.all([
    Companies.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Companies.countDocuments(),
  ]);

  return res.status(200).json(
    new APIRES(
      200,
      {
        companies,
        totalCompanies,
        currentPage: page,
        totalPages: Math.ceil(totalCompanies / limit),
        hasNextPage: skip + companies.length < totalCompanies,
        hasPreviousPage: page > 1,
      },
      "Companies fetched successfully.",
    ),
  );
});

const searchCompanies = asyncHandler(async (req, res) => {
  const { query } = req.params;
  if (!query?.trim()) {
    throw new APIERR(400, "Please provide a company name.");
  }

  const companies = await Companies.find({
    companyName: {
      $regex: query.trim(),
      $options: "i",
    },
  })
    .sort({ companyName: 1 })
    .lean();

  if (companies.length === 0) {
    throw new APIERR(404, `No companies found matching "${query}".`);
  }

  return res.status(200).json(
    new APIRES(
      200,
      {
        total: companies.length,
        companies,
      },
      "Companies fetched successfully.",
    ),
  );
});

export { getCompanies, searchCompanies };
