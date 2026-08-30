import { motion } from "framer-motion";
import { useMemo } from "react";

const UserSocialProof = ({ item }) => {
  const avatars = useMemo(() => {
    const ids = Array.from({ length: 70 }, (_, index) => index + 1);

    return ids
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map((id) => `https://i.pravatar.cc/100?img=${id}`);
  }, []);

  return (
    <motion.div
      variants={item}
      className="
        mt-10 flex items-center gap-3
        border-t border-ink-line
        pt-6
      "
    >
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <motion.img
            key={avatar}
            src={avatar}
            alt=""
            loading="lazy"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.7 + index * 0.08,
              duration: 0.35,
            }}
            className="
              h-7 w-7
              rounded-full
              border-2 border-paper
              object-cover
            "
          />
        ))}
      </div>

      <p className="text-[12.5px] leading-5 text-ink-mute">
        <span className="font-semibold text-ink">10,000+</span> students
        tracking placements this season
      </p>
    </motion.div>
  );
};

export default UserSocialProof;
