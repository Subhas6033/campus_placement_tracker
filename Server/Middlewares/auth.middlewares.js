import jwt from "jsonwebtoken";
import { User } from "../Models/user.models.js";
import { asyncHandler, APIERR } from "../Utils/helpers.utils.js";

export const authMiddleware = asyncHandler(async (req, res, next) => {
  // Get token from cookie or Authorization header
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new APIERR(401, "Unauthorized request.");
  }

  // Verify JWT
  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  // Fetch user
  const user = await User.findById(decodedToken._id);

  if (!user) {
    throw new APIERR(401, "Invalid access token.");
  }

  // Attach authenticated user
  req.user = user;

  next();
});
