import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MacWindowProps {
  title: string;
  children: ReactNode;
}

const MacWindow: React.FC<MacWindowProps> = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-gray-300 shadow-xl bg-white overflow-hidden"
    >
      <div className="flex items-center px-4 py-2 bg-white border-b border-gray-300">
        <div className="flex space-x-2 mr-4">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <p className="text-sm text-gray-500 font-medium truncate">{title}</p>
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  );
};

export default MacWindow;
