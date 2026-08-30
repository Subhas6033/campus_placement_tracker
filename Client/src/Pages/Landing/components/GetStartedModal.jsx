import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Modal, Input, Button } from "../../../Components/index";

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "U";

const GetStartedModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.password) {
      next.password = "Password is required.";
    } else if (form.password.length < 6) {
      next.password = "Password must be at least 6 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setSubmitting(false);
    setSuccess(true);
  };

  const handleClose = () => {
    if (submitting) return;
    onClose?.();
    setTimeout(() => {
      setForm({ name: "", email: "", password: "" });
      setErrors({});
      setSuccess(false);
    }, 250);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={success ? "Welcome aboard!" : "Create your account"}
      description={
        success
          ? `Hi ${form.name.split(" ")[0]}, your account is ready.`
          : "Start tracking your placements in under a minute."
      }
      size="md"
      loading={submitting}
      closeOnBackdrop={!submitting}
      closeOnEscape={!submitting}
      footer={
        success ? (
          <Button variant="primary" size="md" onClick={handleClose}>
            Go to dashboard
          </Button>
        ) : (
          <div className="flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button
              variant="secondary"
              size="md"
              onClick={handleClose}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="get-started-form"
              variant="primary"
              size="md"
              loading={submitting}
            >
              Create account
            </Button>
          </div>
        )
      }
    >
      {success ? (
        <div className="flex flex-col items-center gap-3 py-2 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-md bg-ink text-base font-semibold tracking-tight text-paper">
            {initials(form.name)}
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2f6f55]/10 text-[#2f6f55]">
            <FiCheckCircle className="h-5 w-5" />
          </span>
          <p className="text-[14px] leading-[1.6] text-ink-mute">
            Your account has been created. You&apos;re all set to start tracking
            companies, applications, and offers.
          </p>
        </div>
      ) : (
        <form
          id="get-started-form"
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4"
        >
          <Input
            id="signup-name"
            name="name"
            label="Full name"
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Doe"
            error={errors.name}
            required
            autoComplete="name"
          />
          <Input
            id="signup-email"
            name="email"
            label="College email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@college.edu"
            error={errors.email}
            required
            autoComplete="email"
          />
          <Input
            id="signup-password"
            name="password"
            label="Password"
            type="password"
            value={form.password}
            onChange={update("password")}
            placeholder="At least 6 characters"
            error={errors.password}
            hint="We'll never share your password."
            required
            autoComplete="new-password"
          />
        </form>
      )}
    </Modal>
  );
};

export default GetStartedModal;
