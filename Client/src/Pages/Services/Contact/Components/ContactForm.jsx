import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  fadeUpVariants,
  fadeRightVariants,
} from "../../../../Animations/Motions";
import { contactTopics } from "../../../../Data/contactData";
import { Button, Card, Input, Select } from "../../../../Components/index";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log("Contact form:", data);
    setSubmitted(true);
    reset();
    // Actual API Call goes here
  };

  const topicOptions = contactTopics.map((topic) => ({
    value: topic,
    label: topic,
  }));

  return (
    <section className="border-y border-ink-line bg-paper-soft">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left content */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-lg"
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand-500">
              Send a message
            </p>

            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
              We're listening.
            </h2>

            <p className="mt-4 text-[15px] leading-6 text-ink-mute">
              Tell us what's on your mind. Whether it's a question, an issue, or
              an idea for making Campus Placement Tracker better, your message
              matters.
            </p>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-lg border border-brand-300 bg-brand-50 p-4"
              >
                <p className="text-sm font-medium text-brand-700">
                  Thanks for reaching out.
                </p>

                <p className="mt-1 text-sm text-ink-mute">
                  Your message has been received.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="p-1">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                {/* Name */}
                <Input
                  id="name"
                  label="Name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  error={errors.name?.message}
                  {...register("name", {
                    required: "Please enter your name.",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters.",
                    },
                  })}
                />

                {/* Email */}
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  error={errors.email?.message}
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />

                {/* Topic */}
                <Select
                  id="topic"
                  label="Topic"
                  placeholder="Select a topic"
                  options={topicOptions}
                  required
                  error={errors.topic?.message}
                  {...register("topic", {
                    required: "Please select a topic.",
                  })}
                />

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-[12.5px] font-medium tracking-wide text-ink"
                  >
                    Message
                    <span className="ml-1 text-danger" aria-hidden="true">
                      *
                    </span>
                  </label>

                  <textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    rows={6}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`w-full resize-none rounded-md border bg-white px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all duration-150 placeholder:text-[#8a8d96] ${
                      errors.message
                        ? "border-danger focus:border-danger focus:ring-2 focus:ring-danger/10"
                        : "border-ink-line focus:border-ink focus:ring-2 focus:ring-ink/5"
                    }`}
                    {...register("message", {
                      required: "Please enter your message.",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters.",
                      },
                    })}
                  />

                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 text-xs font-medium text-danger"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
