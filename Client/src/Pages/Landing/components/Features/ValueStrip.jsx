import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "../../../../Components/index";
import ValuePropGrid from "./ValueGrid";

const ValueStrip = ({ reduce }) => {
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mt-6"
    >
      <Card
        variant="dark"
        className="
          overflow-hidden
          p-0!
          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        "
      >
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <ValueStripContent />
          <ValuePropGrid />
        </div>
      </Card>
    </motion.div>
  );
};

const ValueStripContent = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2f6f55]/20 blur-3xl"
      />

      <div className="relative">
        <ValueEyebrow />

        <h3 className="mt-5 max-w-xl font-display text-[28px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[34px]">
          Less time managing your applications.
          <span className="text-white/45">
            {" "}
            More time becoming the candidate companies want.
          </span>
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
          Everything stays connected — applications, companies, preparation,
          analytics, and deadlines.
        </p>

        <Button
          variant="secondary"
          size="lg"
          onClick={() => navigate("/signup")}
          className="mt-7 border-0!"
        >
          <span className="flex justify-center gap-2">
            Start your free trial
            <FiArrowUpRight className="h-4 w-4" />
          </span>
        </Button>
      </div>
    </div>
  );
};

const ValueEyebrow = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5">
      <Zap className="h-3.5 w-3.5 text-[#b88947]" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
        Built for placement season
      </span>
    </div>
  );
};

export default ValueStrip;
