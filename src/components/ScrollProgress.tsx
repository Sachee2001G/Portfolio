"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed right-6 md:right-12 bottom-12 hidden md:flex flex-col items-center gap-4 z-50 h-[300px]"
    >
      {/* Label for context (optional, can be removed if strictly mirroring left side) */}
      <div className="absolute -top-10 text-xs font-semibold tracking-widest -rotate-90 origin-bottom text-gray-500">
        SACHEE
      </div>

      <div className="w-[1px] h-full bg-gray-200 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-black origin-top"
          style={{ scaleY, height: "100%" }}
        />
      </div>
    </motion.div>
  );
};

export default ScrollProgress;
