import { FiUserPlus, FiSend, FiAward } from "react-icons/fi";

export const steps = [
  {
    icon: FiUserPlus,
    number: "01",
    title: "Set up your profile",
    description:
      "Add your resume, skills, and target roles. We'll surface the companies that fit you best.",
    chips: ["Resume", "Skills", "Targets"],
  },
  {
    icon: FiSend,
    number: "02",
    title: "Track every application",
    description:
      "Apply with one click and watch each opportunity move through your personal pipeline.",
    chips: ["One-click apply", "Pipeline view", "Reminders"],
  },
  {
    icon: FiAward,
    number: "03",
    title: "Ace the interview",
    description:
      "Prep with curated questions, attend the interview, and update your status — all in one place.",
    chips: ["Question bank", "Mock AI", "Notes"],
  },
];
