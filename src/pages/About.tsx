// File: About.tsx
import { motion } from "framer-motion";
import Team from '../assets/Team.jpg';
const About = () => {
  return (
    <main className="font-[Outfit] text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-white border-b border-gray-100 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50 before:to-indigo-100 before:blur-3xl before:-z-10">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute -top-24 -left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/20 rounded-full blur-2xl animate-spin-slow" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">ColdMail Pro</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            ColdMail Pro is your intelligent cold email assistant — blending cutting-edge AI with smart automation to boost your outreach, save time, and help you close more deals.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe outreach should feel natural, not robotic. Our mission is to empower businesses, freelancers, and creators to connect with their audience in a smarter, more human way — with the power of AI.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full aspect-video rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <img
              src={Team}
              alt="Team working illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-12 text-gray-900">
            What We Value
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Transparency", desc: "We build with honesty and openness — no tricks, just trust." },
              { title: "Innovation", desc: "We stay ahead of the curve by embracing AI and automation fearlessly." },
              { title: "Simplicity", desc: "Great design and clarity are at the core of everything we create." },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all"
              >
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Join the ColdMail Revolution?
        </h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Try ColdMail Pro free and see how AI can change your outreach game forever.
        </p>
        <a
          href="/auth"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Start Free Trial
        </a>
      </section>
    </main>
  );
};

export default About;
