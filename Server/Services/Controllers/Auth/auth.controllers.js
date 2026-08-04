import { asyncHandler, APIERR, APIRES } from "../../../Utils/helpers.utils.js";
import { User } from "../../../Models/user.models.js";
import { cookieOptions } from "../../../Config/cookie.config.js";

const generateAccessTokenAndRefreshToken = asyncHandler(async (userId) => {
  const user = await User.findById(userId).select("+refreshToken");
  if (!user) throw new APIERR(404, "User not found");

  //   Generate tokens
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  user.refreshToken = refreshToken;

  await user.save({ validateBeforeSave: false });
  return { accessToken, refreshToken };
});

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, mobileNumber } = req.body;
  if (
    [fullName, email, password, mobileNumber].some((f) => !f || f.trim() === "")
  ) {
    throw new APIERR(400, "All the fields are required");
  }

  //   Find the existing users
  const existingUser = await User.findOne({ email });
  if (existingUser)
    throw new APIERR(409, "Users already exists with this mail. Please login");

  const createUser = await User.create({
    fullName,
    email,
    mobileNumber,
    password,
    role: "user",
  });

  //   Generate the refreshToken and accessToken
  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(createUser._id);

  return res
    .status(201)
    .cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: process.env.REFRESH_TOKEN_EXPIRY,
    })
    .cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: process.env.ACCESS_TOKEN_EXPIRY,
    })
    .json(new APIRES(201, { createUser }, "Users created successfully"));
});

const loginUser = asyncHandler(async (req, res) => {});

const logoutUser = asyncHandler(async (req, res) => {});

export { registerUser, loginUser, logoutUser };
