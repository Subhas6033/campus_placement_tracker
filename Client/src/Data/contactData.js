import { Mail, MessageCircle, Clock3, MapPin, HelpCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email us",
    description: "Have a question, suggestion, or need help with the tracker?",
    value: "support@campusplacementtracker.com",
    href: "mailto:support@campusplacementtracker.com",
  },
  {
    icon: MessageCircle,
    title: "General support",
    description:
      "Reach out if you need help understanding or using the platform.",
    value: "We're here to help",
  },
  {
    icon: Clock3,
    title: "Response time",
    description: "We aim to respond to messages as quickly as possible.",
    value: "Within 1–2 business days",
  },
];

const contactTopics = [
  "General question",
  "Technical issue",
  "Placement tracker feedback",
  "Feature suggestion",
  "Partnership",
  "Other",
];

const faqs = [
  {
    icon: HelpCircle,
    question: "What can I contact you about?",
    answer:
      "You can contact us about questions, technical issues, feedback, feature suggestions, partnerships, or anything related to Campus Placement Tracker.",
  },
  {
    icon: HelpCircle,
    question: "How quickly will I receive a response?",
    answer: "We aim to respond to messages within 1–2 business days.",
  },
  {
    icon: HelpCircle,
    question: "Can I suggest a feature?",
    answer:
      "Absolutely. Feature suggestions and feedback help us improve the placement experience for students.",
  },
];

export { contactInfo, contactTopics, faqs };
