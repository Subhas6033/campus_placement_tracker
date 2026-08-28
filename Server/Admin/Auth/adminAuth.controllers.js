import { asyncHandler, APIERR, APIRES } from "../../Utils/helpers.utils.js";
import { User } from "../../Models/user.models.js";
import { generateAccessTokenAndRefreshToken } from "../../Services/Auth/auth.controllers.js";
import { cookieOptions } from "../../Config/cookie.config.js";

const registerAdmin = asyncHandler(async (req, res) => {
  const { fullName, email, mobileNumber, password, role } = req.body;
  if (
    [fullName, email, mobileNumber, password, role].some(
      (val) => !val || val.trim() === "",
    )
  ) {
    throw new APIERR(400, "Please provide the required fields");
  }

  const isAdminExist = await User.findOne({ email });
  if (isAdminExist)
    throw new APIERR(
      409,
      "An admin already exist with this mail. Please login instead",
    );

  const createAdmin = await User.create({
    fullName,
    email,
    mobileNumber,
    password,
    role: "admin",
  });

  const { accessToken, refreshToken } = generateAccessTokenAndRefreshToken(
    createAdmin._id,
  );

  //Remove the sensitive fields from the response
  const findAdmin = await User.findById(createAdmin._id);

  return res
    .status(201)
    .cookie("accessToken", accessToken, {
      ...cookieOptions,
      maxAge: 5 * 60 * 1000,
    })
    .cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 15 * 24 * 60 * 60 * 1000,
    })
    .json(new APIRES(201, { findAdmin }, "Admin created successfully"));
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new APIERR(400, "Please provide all the fields");

  const isAccountExist = await User.findOne({ email }).select("+password");
  if (!isAccountExist)
    throw new APIERR(
      404,
      "No account find with this mail. Plese signup instead",
    );

  const isPasswordCorrect = await isAccountExist.comparePassword(password);
  console.log(`After checking the password : ${isPasswordCorrect}`);
  if (!isPasswordCorrect) throw new APIERR(400, "Password is not correct");

  const { accessToken, refreshToken } = generateAccessTokenAndRefreshToken(
    isAccountExist._id,
  );

  const findUserAccount = await User.findById(isAccountExist._id);

  return res
    .status(200)
    .cookie("accessTokn", accessToken, {
      ...cookieOptions,
      maxAge: 5 * 60 * 1000,
    })
    .cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 15 * 24 * 60 * 60 * 1000,
    })
    .json(
      new APIRES(200, { findUserAccount }, "Account successfully logged in"),
    );
});

export { registerAdmin, loginAdmin };
