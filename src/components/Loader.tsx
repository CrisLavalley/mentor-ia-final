
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center py-10">
      <motion.div
        className="rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}
