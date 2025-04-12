// File: Home.tsx
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import Hero from '../assets/Hero.jpg';
import MacbookMockup from "../components/MacbookMockup";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="font-[Outfit] text-gray-800 bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600 hover:scale-105 hover:animate-pulse transition-all duration-300">
            ColdMail Pro
          </h1>

          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-black text-sm">Home</a>
            <a href="/about" className="hover:text-black text-sm">About</a>
            <a href="/pricing" className="hover:text-black text-sm">Pricing</a>
            <a href="/contact" className="hover:text-black text-sm">Contact</a>
          </nav>
          {user ? (
            <a href="/dashboard" className="hidden md:inline-block text-sm font-medium text-blue-600 hover:underline">
              Go to Dashboard
            </a>
          ) : (
            <a href="/auth" className="hidden md:inline-block text-sm font-medium text-blue-600 hover:underline">
              Get Started
            </a>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-white border-b border-gray-100 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50 before:to-indigo-100 before:blur-3xl before:-z-10">

        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute -top-24 -left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/20 rounded-full blur-2xl animate-spin-slow" />
        </div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="px-6 py-10 bg-white rounded-3xl backdrop-blur-sm"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6 text-balance">
              Send Cold Emails <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
                That Actually Convert
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              ColdMail Pro uses AI to craft, personalize, and automate your outreach—helping you grow faster and smarter.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-start gap-4">
              <a
                href={user ? "/dashboard" : "/auth"}
                 className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-blue-200"
              >
                {user ? "Go to Dashboard" : "Start Free Trial"}
              </a>
              <a
                href="#features"
                className="px-6 py-3 border border-blue-600 text-blue-600 bg-white rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="w-full max-w-md mx-auto transition-transform duration-300"
          >
            <MacbookMockup children={
            <img
              src={Hero}
              alt="Hero Illustration"
            />}
            title='Hero Image'/>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12">Why ColdMail Pro?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Smart Personalization", desc: "AI-powered personalization for better response rates." },
            { title: "Automated Sequences", desc: "Set it and forget it—follow-ups that feel natural." },
            { title: "Analytics & Tracking", desc: "Know who opened and clicked. Optimize your campaigns." },
          ].map((feat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-gray-200 shadow-sm p-6 text-left bg-white transition"
            >
              <h4 className="text-lg font-semibold mb-2">{feat.title}</h4>
              <p className="text-sm text-gray-600">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Interaction Preview */}
      <section className="py-12 px-6 max-w-xl mx-auto text-sm border-t">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
          <p><strong>You:</strong> Write a follow-up email to a client who didn’t respond.</p>
          <p className="mt-2 text-blue-600"><strong>ColdMail AI:</strong> Sure! Here’s a gentle follow-up you can send...</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center relative">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to supercharge your outreach?</h3>
        <p className="text-gray-600 mb-6">Start your free trial today. No credit card required.</p>
        <a
          href={user ? "/dashboard" : "/auth"}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          {user ? "Go to Dashboard" : "Get Started"}
        </a>
      </section>

      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            How <span className="text-blue-600">ColdMail Pro</span> Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover how ColdMail Pro turns cold outreach into a warm conversation — powered by beautiful design and smart automation.
          </p>
        </div>

        {/* Grid container for showpieces */}
        <div className="max-w-7xl mx-auto px-6 grid gap-20">
          {/* --- Feature 1 --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white"
          >
            {/* Mac-style header */}
            <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b border-gray-200">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <p className="ml-4 text-sm text-gray-500">coldmail.app/email</p>
            </div>

            {/* Content */}
            <div className="p-10 bg-gradient-to-br from-white to-blue-50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">✨ Personalized Emails, Instantly</h3>
              <p className="text-gray-600 mb-6">
                ColdMail Pro uses AI to write ultra-personalized emails in seconds. Just enter a lead — and let the magic happen.
              </p>

            </div>
          </motion.div>

          {/* --- Feature 2 --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white"
          >
            {/* Mac-style header */}
            <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b border-gray-200">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <p className="ml-4 text-sm text-gray-500">coldmail.app/analytics</p>
            </div>

            {/* Content */}
            <div className="p-10 bg-gradient-to-br from-white to-indigo-50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">📈 Real-Time Analytics</h3>
              <p className="text-gray-600 mb-6">
                Get instant feedback on your outreach — who opened, clicked, or replied. Data that helps you get smarter, faster.
              </p>

            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Home;