import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
} from "lucide-react";
import Logo from '../assets/Logo.png';

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Contact", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
];

const socials = [
  { name: "Twitter", href: "https://facebook.com/profile.php?id=61560948905774", icon: Facebook },
  { name: "GitHub", href: "http://github.com/shahzain19", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/shahzain-rasool-ba488735b/", icon: Linkedin },
  { name: "Email", href: "mailto:shahzainnotebooks.pk@gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="font-[Outfit] w-full bg-white border-t border-gray-200 shadow-md shadow-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold gap-3 text-gray-800 flex items-center justify-center"><img src={Logo} alt="logo" width={40} className="rounded-full" />ColdMail Pro</h2>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition text-sm font-medium"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Right - Socials */}
        <div className="flex gap-4">
          {socials.map(({ name, href, icon: Icon }) => (
            <motion.a
              whileHover={{ scale: 1.2, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
              title={name}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
