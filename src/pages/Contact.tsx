// File: Contact.tsx
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <main className="font-[Outfit] text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-white border-b border-gray-100 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50 before:to-indigo-100 before:blur-3xl before:-z-10">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute -top-24 -left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/20 rounded-full blur-2xl animate-spin-slow" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Get in <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have a question, suggestion, or just want to say hi? Fill out the form and we’ll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-xl"
        >
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Prefer Email?</h3>
          <p className="text-gray-600">
            You can also contact us directly at{" "}
            <a href="mailto:shahzainnotebooks.pk@gmail.com" className="text-blue-600 underline">
              shahzainnotebooks.pk@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
