import { Search, CalendarDays, BookOpen, BarChart3 } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Discover opportunities",
    description:
      "Explore companies, roles, eligibility requirements, and placement opportunities without jumping between multiple platforms.",
    icon: Search,
  },
  {
    number: "02",
    title: "Track applications",
    description:
      "Keep every application organized with clear stages, deadlines, notes, and status updates.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Prepare smarter",
    description:
      "Organize interview preparation, company research, resources, and personal notes in one focused workspace.",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Track your outcome",
    description:
      "See your progress from application to interview to offer, giving you a clear picture of your placement journey.",
    icon: BarChart3,
  },
];

const principles = [
  {
    title: "Clarity over complexity",
    description:
      "Placement season can already be overwhelming. The tracker is designed to make your next step obvious.",
  },
  {
    title: "Everything in one place",
    description:
      "Applications, companies, preparation, deadlines, and outcomes belong together—not across scattered spreadsheets and notes.",
  },
  {
    title: "Progress you can see",
    description:
      "Small progress matters. The dashboard helps turn a long placement journey into visible, manageable steps.",
  },
];

const stats = [
  {
    value: "01",
    label: "Focused workspace",
  },
  {
    value: "04",
    label: "Core placement stages",
  },
  {
    value: "∞",
    label: "Opportunities to grow",
  },
];

export { features, principles, stats };
