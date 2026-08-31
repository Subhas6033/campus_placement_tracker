import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Card, Button, Input } from "../../../Components/index";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      console.log("Login data:", data);
      // login API call
      // await loginUser(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-full bg-paper px-4 py-20">
      <div className="mx-auto w-full max-w-md">
        <Card className="shadow-sm">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-ink">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm leading-5 text-ink-mute">
              Login to your account to continue.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <Input
              id="email"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email",
                },
              })}
            />

            {/* Password */}
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
              })}
            />

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              loading={isSubmitting}
              disabled={!isValid}
              className="w-full"
            >
              Login
            </Button>
          </form>

          {/* Forgot Password */}
          <div className="mt-5 flex justify-center">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-ink underline underline-offset-4 hover:text-[#2f6f55]"
            >
              Forgot password?
            </Link>
          </div>

          {/* Signup */}
          <p className="mt-6 text-center text-sm text-ink-mute">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-ink underline underline-offset-4 hover:text-[#2f6f55]"
            >
              Create an account
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;
