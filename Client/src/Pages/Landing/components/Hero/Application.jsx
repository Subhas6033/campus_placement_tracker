import { motion } from "framer-motion";

const ApplicationRow = ({ application, index, reduce }) => {
  const Icon = application.icon;

  return (
    <motion.div
      initial={
        reduce
          ? undefined
          : {
              opacity: 0,
              x: 12,
            }
      }
      animate={
        reduce
          ? undefined
          : {
              opacity: 1,
              x: 0,
            }
      }
      transition={{
        delay: 0.6 + index * 0.12,
        duration: 0.45,
      }}
      className="
        flex items-center gap-3
        rounded-lg
        border border-ink-line
        bg-white
        p-3
      "
    >
      <span
        className="
          flex h-9 w-9 shrink-0
          items-center justify-center
          rounded-md text-white
        "
        style={{
          backgroundColor: application.color,
        }}
      >
        <Icon className="h-4 w-4" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[12.5px] font-semibold text-ink">
          {application.company}{" "}
          <span className="font-normal text-ink-mute">
            · {application.role}
          </span>
        </p>

        <p className="mt-0.5 truncate text-[11px] text-ink-mute">
          {application.stage}
        </p>
      </div>

      <span
        className="
        shrink-0
        rounded-md
        border border-ink-line
        px-2 py-0.5
        font-mono
        text-[10px]
        uppercase
        tracking-wider
        text-ink-mute
      "
      >
        {application.ctc}
      </span>
    </motion.div>
  );
};

export default ApplicationRow;
