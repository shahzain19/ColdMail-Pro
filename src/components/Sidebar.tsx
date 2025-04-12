import { motion } from "framer-motion"
import { FiLogOut, FiHome, FiMail } from "react-icons/fi"
import Logo from "../assets/Logo.png"

export const Sidebar = ({ user, onLogout }: { user: any; onLogout: () => void }) => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 h-full w-80 bg-white/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-r border-gray-200 px-6 py-8 z-50"
    >
      <div className="flex items-center space-x-3 mb-12">
        <img src={Logo} alt="Logo" className="w-8 h-8 drop-shadow-md" />
        <span className="text-2xl font-bold">
          ColdMail Pro
        </span>
      </div>

      <nav className="space-y-6">
        <a href="/dashboard" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition">
          <FiHome className="text-lg" />
          <span className="font-medium">Cold Emails</span>
        </a>

        <a href="#" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition">
          <FiMail className="text-lg" />
          <span className="font-medium">Emails</span>
        </a>
      </nav>

      <div className="absolute bottom-8 left-6 right-6">
        <div className="text-sm text-gray-600 mb-2">{user?.email}</div>
        <button
          onClick={onLogout}
          className="flex items-center cursor-pointer space-x-2 text-red-500 hover:text-red-800 text-sm font-medium transition"
        >
          <FiLogOut className="text-base" />
          <span>Logout</span>
        </button>
      </div>
    </motion.aside>
  )
} 
