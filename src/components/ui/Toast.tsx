import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export default function Toast({
  message,
  type = "success",
  onClose,
}: ToastProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-10 right-10 z-50 px-6 py-4 rounded-xl shadow-xl font-medium
  ${
    type === "success"
      ? "bg-green-500/80 text-white backdrop-blur-sm border-green-300"
      : "bg-red-500/80 text-white backdrop-blur-sm border-red-300"
  }`}
      >
        <div className="flex items-center justify-between gap-4">
          <span>{message}</span>
          <button
            onClick={onClose}
            className="text-white font-bold text-lg leading-none"
          >
            &times;
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
