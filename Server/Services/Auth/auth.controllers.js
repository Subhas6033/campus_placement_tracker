import { asyncHandler, APIERR, APIRES } from "../../Utils/helpers.utils.js";
import { User } from "../../Models/user.models.js";
import { cookieOptions } from "../../Config/cookie.config.js";

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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new APIERR(400, "All the fields are required");

  const findUser = await User.findOne({ email }).select(
    "+password +refreshToken",
  );
  if (!findUser) throw new APIERR(404, "Users with this mail not found");

  //   Compare password
  const isPasswordCorrect = await findUser.comparePassword(password);
  if (!isPasswordCorrect) throw new APIERR(400, "Password is not correct");

  //generate new tokens
  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(findUser._id);

  //Fetch clean user obejct
  const user = await User.findById(findUser._id);

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: process.env.REFRESH_TOKEN_EXPIRY,
    })
    .cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: process.env.ACCESS_TOKEN_EXPIRY,
    })
    .json(new APIRES(200, { user }, "Successfully loggedin"));
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    },
  );

  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new APIRES(200, null, "Logged out successfully."));
});

export { registerUser, loginUser, logoutUser };
