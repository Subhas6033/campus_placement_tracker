import React from "react";
import { useForm } from "react-hook-form";
import { Card, Button, Input } from "../../../Components/index";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      console.log("Signup data:", data);
      //signup API call
      // await signupUser(data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-paper px-4 py-10 sm:flex sm:items-center sm:justify-center">
      <div className="w-full max-w-md">
        <Card className="shadow-sm">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-ink">
              Signup to get Started
            </h1>

            <p className="mt-2 text-sm leading-5 text-ink-mute">
              Create your account to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <Input
              id="name"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
              error={errors.name?.message}
              {...register("name", {
                required: "Name is required",
                validate: (value) => value.trim() !== "" || "Name is required",
              })}
            />

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
              autoComplete="new-password"
              hint={!errors.password ? "Use at least 8 characters." : undefined}
              error={errors.password?.message}
              required
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            {/* Confirm Password */}
            <Input
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
              error={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
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
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-ink-mute">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-ink underline underline-offset-4 hover:text-[#2f6f55]"
            >
              Login
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
