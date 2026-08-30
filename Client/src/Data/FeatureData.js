import {
  FiBriefcase,
  FiTarget,
  FiBookOpen,
  FiBarChart2,
  FiBell,
  FiUsers,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";
import { Shield, Award } from "lucide-react";

const features = [
  {
    icon: FiBriefcase,
    eyebrow: "PIPELINE",
    title: "Application tracking",
    description:
      "Manage every application from one clean workspace. Move opportunities from Applied to Offer without losing context.",
    points: ["Kanban pipeline", "Status history", "Custom tags"],
    color: "#2f6f55",
    badge: "Most used",
  },
  {
    icon: FiTarget,
    eyebrow: "DISCOVERY",
    title: "Company discovery",
    description:
      "Discover visiting companies and instantly filter opportunities by role, CTC, eligibility, and deadline.",
    points: ["Live eligibility", "CTC + role filters", "Saved searches"],
    color: "#b88947",
    badge: "New",
  },
  {
    icon: FiBookOpen,
    eyebrow: "PREPARATION",
    title: "Interview prep",
    description:
      "Prepare with curated question banks, company-specific guides, and realistic AI mock interviews.",
    points: ["Question bank", "Mock interviews", "Prep guides"],
    color: "#635bff",
    badge: "Popular",
  },
  {
    icon: FiBarChart2,
    eyebrow: "INSIGHTS",
    title: "Real-time analytics",
    description:
      "Understand your funnel, identify skill gaps, and know exactly where to focus your preparation.",
    points: ["Conversion funnel", "Skill map", "Readiness score"],
    color: "#3395ff",
  },
  {
    icon: FiBell,
    eyebrow: "AUTOMATION",
    title: "Smart alerts",
    description:
      "Stay ahead of application windows, status changes, deadlines, and important placement updates.",
    points: ["Application windows", "Status updates", "Daily digest"],
    color: "#e74c3c",
  },
  {
    icon: FiUsers,
    eyebrow: "NETWORK",
    title: "Peer collaboration",
    description:
      "Learn from students and seniors through referrals, interview experiences, and placement discussions.",
    points: ["Referrals", "Interview notes", "Senior threads"],
    color: "#8e44ad",
  },
];

const stats = [
  {
    label: "Companies tracked",
    value: "500+",
    icon: FiTarget,
  },
  {
    label: "Active students",
    value: "10K+",
    icon: FiUsers,
  },
  {
    label: "Applications managed",
    value: "50K+",
    icon: FiBriefcase,
  },
  {
    label: "Success rate",
    value: "94%",
    icon: Award,
  },
];

const valueProps = [
  {
    icon: FiTrendingUp,
    title: "Stay ahead",
    text: "Know what needs your attention next.",
  },
  {
    icon: FiClock,
    title: "Save hours",
    text: "Stop maintaining scattered trackers.",
  },
  {
    icon: Shield,
    title: "Never miss",
    text: "Important deadlines stay visible.",
  },
  {
    icon: Award,
    title: "Prepare smarter",
    text: "Focus preparation where it matters.",
  },
];

export { features, stats, valueProps };
