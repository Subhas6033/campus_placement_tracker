import mongoose from "mongoose";
import dotenv from "dotenv";

import { Companies } from "../Models/companies.models.js";

dotenv.config({ path: ".env" });

const companies = [
  {
    companyName: "Tata Consultancy Services",
    companyLogo: "https://logo.clearbit.com/tcs.com",
    companyWebsite: "https://www.tcs.com",
    industry: "Information Technology",
    headquarters: "Mumbai, Maharashtra, India",
    description:
      "TCS is a global IT services, consulting, and business solutions company.",
    foundedYear: 1968,
    isActive: true,
  },
  {
    companyName: "Infosys",
    companyLogo: "https://logo.clearbit.com/infosys.com",
    companyWebsite: "https://www.infosys.com",
    industry: "Information Technology",
    headquarters: "Bengaluru, Karnataka, India",
    description:
      "Infosys provides digital transformation, consulting, and outsourcing services worldwide.",
    foundedYear: 1981,
    isActive: true,
  },
  {
    companyName: "Wipro",
    companyLogo: "https://logo.clearbit.com/wipro.com",
    companyWebsite: "https://www.wipro.com",
    industry: "Information Technology",
    headquarters: "Bengaluru, Karnataka, India",
    description:
      "Wipro is a leading technology services and consulting company.",
    foundedYear: 1945,
    isActive: true,
  },
  {
    companyName: "Accenture",
    companyLogo: "https://logo.clearbit.com/accenture.com",
    companyWebsite: "https://www.accenture.com",
    industry: "IT Consulting",
    headquarters: "Dublin, Ireland",
    description:
      "Accenture is a global professional services company specializing in digital, cloud, and security.",
    foundedYear: 1989,
    isActive: true,
  },
  {
    companyName: "Capgemini",
    companyLogo: "https://logo.clearbit.com/capgemini.com",
    companyWebsite: "https://www.capgemini.com",
    industry: "IT Consulting",
    headquarters: "Paris, France",
    description:
      "Capgemini provides consulting, technology, and outsourcing services.",
    foundedYear: 1967,
    isActive: true,
  },
  {
    companyName: "Cognizant",
    companyLogo: "https://logo.clearbit.com/cognizant.com",
    companyWebsite: "https://www.cognizant.com",
    industry: "Information Technology",
    headquarters: "Teaneck, New Jersey, USA",
    description:
      "Cognizant offers IT consulting and digital transformation services.",
    foundedYear: 1994,
    isActive: true,
  },
  {
    companyName: "Microsoft",
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    companyWebsite: "https://www.microsoft.com",
    industry: "Software",
    headquarters: "Redmond, Washington, USA",
    description:
      "Microsoft develops software, cloud services, and enterprise solutions.",
    foundedYear: 1975,
    isActive: true,
  },
  {
    companyName: "Google",
    companyLogo: "https://logo.clearbit.com/google.com",
    companyWebsite: "https://www.google.com",
    industry: "Internet & Software",
    headquarters: "Mountain View, California, USA",
    description:
      "Google specializes in search, cloud computing, artificial intelligence, and consumer technologies.",
    foundedYear: 1998,
    isActive: true,
  },
  {
    companyName: "Amazon",
    companyLogo: "https://logo.clearbit.com/amazon.com",
    companyWebsite: "https://www.amazon.com",
    industry: "E-commerce & Cloud",
    headquarters: "Seattle, Washington, USA",
    description:
      "Amazon is a multinational company focusing on e-commerce, cloud computing, and AI.",
    foundedYear: 1994,
    isActive: true,
  },
  {
    companyName: "Oracle",
    companyLogo: "https://logo.clearbit.com/oracle.com",
    companyWebsite: "https://www.oracle.com",
    industry: "Enterprise Software",
    headquarters: "Austin, Texas, USA",
    description:
      "Oracle provides database software, cloud infrastructure, and enterprise applications.",
    foundedYear: 1977,
    isActive: true,
  },
];

const seedCompanies = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB Connected");

    // Optional: Remove existing companies
    await Companies.insertMany(companies);

    console.log("Companies seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedCompanies();
