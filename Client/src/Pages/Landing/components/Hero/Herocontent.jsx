import { motion } from "framer-motion";
import { FiArrowRight, FiPlay, FiCheck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../Components/index";
import UserSocialProof from "./UserSocila";

const HeroContent = ({ item, onGetStarted, onSignIn }) => {
  const navigate = useNavigate();

  return (
    <div className="lg:col-span-7">
      {/* Status */}
      <motion.div variants={item}>
        <span
          className="
            inline-flex items-center gap-2
            rounded-full
            border border-ink-line-strong
            bg-paper-soft
            px-3 py-1.5
            font-mono text-[10px]
            uppercase tracking-[0.18em]
            text-ink-mute
            shadow-sm
          "
        >
          <span className="live-dot" />
          Season 2026 is live
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={item}
        className="
          mt-6 max-w-3xl
          font-display
          text-[clamp(2.6rem,5.6vw,5rem)]
          font-normal
          leading-[1.01]
          tracking-[-0.035em]
          text-ink
        "
      >
        The placement tracker
        <br />
        that{" "}
        <span className="relative inline-block">
          <span className="relative z-10">actually works.</span>

          <span
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              bottom-1.5
              z-0
              h-3
              bg-[#b88947]/30
            "
          />
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="
          mt-6 max-w-xl
          text-[16px]
          leading-[1.65]
          text-ink-mute
        "
      >
        Discover visiting companies, manage every application, prep for
        interviews, and watch offers land — all in one quiet, focused workspace.
      </motion.p>

      <HeroActions
        item={item}
        onSignIn={onSignIn}
        onGetStarted={onGetStarted}
        navigate={navigate}
      />

      <motion.ul
        variants={item}
        className="
          mt-7 flex flex-wrap
          items-center
          gap-x-6 gap-y-2
          text-[12.5px]
          text-ink-mute
        "
      >
        {["Free for students", "No card required", "Setup in 2 minutes"].map(
          (text) => (
            <li key={text} className="inline-flex items-center gap-1.5">
              <FiCheck className="h-3.5 w-3.5 text-[#2f6f55]" />
              {text}
            </li>
          ),
        )}
      </motion.ul>

      <UserSocialProof item={item} />
    </div>
  );
};

const HeroActions = ({ item, onSignIn, onGetStarted, navigate }) => {
  return (
    <motion.div
      variants={item}
      className="
        mt-9 flex
        flex-col items-stretch gap-3
        sm:flex-row sm:items-center
      "
    >
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          if (onGetStarted) {
            onGetStarted();
          } else {
            navigate("/signup");
          }
        }}
        className="h-12! px-5! text-[14px]!"
      >
        <span className="flex justify-center gap-2">
          Get started free
          <FiArrowRight className="h-4 w-4" />
        </span>
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={onSignIn}
        className="h-12! px-4! text-[14px]!"
      >
        <span className="flex justify-center gap-2">
          <FiPlay className="h-4 w-4" />
          Watch demo
        </span>
      </Button>
    </motion.div>
  );
};

export default HeroContent;
