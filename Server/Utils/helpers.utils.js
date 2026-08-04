export const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (error) {
    console.log(`Err from asynchandler ${error}`);
    const statusCode = error?.status || 500;
    const message = error?.message || "Something Went Wrong";
    return res.status(statusCode).json({ success: false, message: message });
  }
};

export class APIERR extends Error {
  constructor(
    statusCode = 502,
    message = `Something Went Wrong`,
    success = false,
    errors = [],
    stack,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = success;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class APIRES {
  constructor(statusCode, data, message = "Success", success = true) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = success;
  }
}
