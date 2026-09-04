import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Building2, Calendar } from "lucide-react";

import ApplicationRow from "./Application";
import FloatingReadiness from "./FloatingReadiness";
import FloatingAlert from "./FloatingAlert";

const applications = [
  {
    company: "Stripe",
    role: "SDE Intern",
    ctc: "₹1.2L/mo",
    stage: "Shortlisted",
    color: "#635bff",
    icon: Building2,
  },
  {
    company: "Razorpay",
    role: "Frontend Engineer",
    ctc: "₹18 LPA",
    stage: "Interview — Round 2",
    color: "#3395ff",
    icon: Briefcase,
  },
  {
    company: "Cred",
    role: "Product Engineer",
    ctc: "₹22 LPA",
    stage: "Applied · 2 days ago",
    color: "#000000",
    icon: Calendar,
  },
];

const stages = [
  { name: "Applied", count: 12 },
  { name: "Shortlisted", count: 5, active: true },
  { name: "Interview", count: 3 },
  { name: "Offer", count: 1 },
];

const ProductPreview = ({ reduce }) => {
  return (
    <div className="relative">
      <motion.div
        animate={
          reduce
            ? undefined
            : {
                y: [0, -5, 0],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="
          relative overflow-hidden
          rounded-2xl
          border border-ink-line-strong
          bg-white
          shadow-[0_24px_60px_-20px_rgba(14,17,22,0.25)]
        "
      >
        {/* Browser header */}
        <div className="flex items-center justify-between border-b border-ink-line bg-paper-soft px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#82ff15]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd94f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-danger" />
          </div>

          <span className="font-mono text-[10px] text-black bg-slate-200 p-2 rounded-md">
            https://campusplacement.app/pipeline
          </span>

          <ArrowUpRight className="h-3.5 w-3.5 text-[#8a8d96]" />
        </div>

        <div className="grid grid-cols-5">
          {/* Sidebar */}
          <aside className="col-span-1 border-r border-ink-line bg-paper-soft p-3">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a8d96]">
              Stages
            </div>

            <ul className="mt-3 space-y-1.5">
              {stages.map((stage) => (
                <li
                  key={stage.name}
                  className={`
                    flex items-center justify-between
                    rounded-md px-2 py-1.5
                    text-[11px]
                    ${stage.active ? "bg-ink text-paper" : "text-ink-mute"}
                  `}
                >
                  <span>{stage.name}</span>

                  <span className="font-mono text-[10px] opacity-70">
                    {stage.count}
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Applications */}
          <div className="col-span-4 space-y-2 p-4">
            {applications.map((application, index) => (
              <ApplicationRow
                key={application.company}
                application={application}
                index={index}
                reduce={reduce}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <FloatingReadiness reduce={reduce} />

      <FloatingAlert reduce={reduce} />
    </div>
  );
};

export default ProductPreview;
