import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { generateMessages } from "../utils/gemini";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";

export const Dashboard = () => {
  const { user, signOut } = useAuth();

  const [niche, setNiche] = useState("");
  const [service, setService] = useState("");
  const [tone, setTone] = useState("Professional");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEmailGeneration, setIsEmailGeneration] = useState(true);
  const [creditsLeft, setCreditsLeft] = useState(5);
  const [lastGeneratedAt, setLastGeneratedAt] = useState<number | null>(null);
  const [cooldownLeft, setCooldownLeft] = useState<number>(0);

  useEffect(() => {
    if (!lastGeneratedAt) return;

    const interval = setInterval(() => {
      const secondsLeft = COOLDOWN_SECONDS - Math.floor((Date.now() - lastGeneratedAt) / 1000);
      if (secondsLeft <= 0) {
        clearInterval(interval);
        setCooldownLeft(0);
      } else {
        setCooldownLeft(secondsLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastGeneratedAt]);


  const COOLDOWN_SECONDS = 120;

  const handleGenerate = async () => {
    const now = Date.now();

    if (!niche || !service) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (creditsLeft <= 0) {
      toast.error("You've used all your credits.");
      return;
    }

    if (lastGeneratedAt && now - lastGeneratedAt < COOLDOWN_SECONDS * 1000) {
      const remaining = Math.ceil((COOLDOWN_SECONDS * 1000 - (now - lastGeneratedAt)) / 1000);
      toast.error(`Please wait ${remaining}s before generating again.`);
      return;
    }

    try {
      setLoading(true);
      setResult("");

      const generatedResult = await generateMessages({
        type: isEmailGeneration ? "cold_email" : "copy_paste_message",
        niche,
        service,
        tone,
      });

      setResult(generatedResult);
      setCreditsLeft((prev) => prev - 1);
      setLastGeneratedAt(Date.now());
    } catch (error) {
      console.error("Error generating messages:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("✅ Copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${isEmailGeneration ? "cold_emails" : "messages"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const wordCount = result ? result.split(/\s+/).filter((w) => w).length : 0;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="w-12 h-12 drop-shadow rounded-full" />
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight cursor-pointer">
            <a href="/">ColdMail Pro</a>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700 font-medium">👋 {user?.email}</span>
          <span className="text-sm text-blue-600 font-medium">🔥 Credits left: {creditsLeft}</span>
          <button
            onClick={signOut}
            className="text-sm font-semibold text-red-500 underline hover:text-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Input Panel */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="relative bg-white backdrop-blur-md p-10 rounded-3xl border border-gray-200 shadow-xl max-w-4xl mx-auto"
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60 rounded-3xl z-0" />
        <div className="relative z-10 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            🚀 {isEmailGeneration ? "Generate AI-Powered Cold Emails" : "Generate AI-Powered Copy-Paste Messages"}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="🎯 Target Niche (e.g. real estate)"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm shadow-sm"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
            />
            <input
              type="text"
              placeholder="💼 Service Offered (e.g. web design)"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm shadow-sm"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </div>

          <select
            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm shadow-sm"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Professional</option>
            <option>Casual</option>
            <option>Bold</option>
            <option>Funny</option>
            <option>Persuasive</option>
            <option>Urgent</option>
            <option>Luxury</option>
            <option>Minimalist</option>
            <option>Friendly</option>
          </select>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.015 }}
            onClick={handleGenerate}
            disabled={loading || cooldownLeft > 0}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold transition shadow-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading
              ? "✍️ Generating..."
              : cooldownLeft > 0
                ? `⏳ Wait ${cooldownLeft}s`
                : isEmailGeneration
                  ? "Generate Emails"
                  : "Generate Messages"}

          </motion.button>

          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setIsEmailGeneration(true)}
              className={`py-2 px-4 rounded-xl ${isEmailGeneration ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Cold Emails
            </button>
            <button
              onClick={() => setIsEmailGeneration(false)}
              className={`py-2 px-4 rounded-xl ${!isEmailGeneration ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Copy-Paste Messages
            </button>
          </div>
        </div>
      </motion.div>

      {/* Output Panel */}
      {result && (
        <div className="mt-16 max-w-5xl mx-auto space-y-10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">
              {isEmailGeneration ? "📧 Your Cold Emails" : "💬 Your Messages"}
            </h3>
            <div className="text-sm text-gray-600">{wordCount} words</div>
          </div>
          <button
            onClick={handleDownload}
            className="mb-6 px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-green-700 transition shadow-sm"
          >
            Download All
          </button>
          {result
            .split(/\d\.\s/)
            .filter(Boolean)
            .map((content, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-md transition"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold text-gray-800">
                    {isEmailGeneration ? `Email ${index + 1}` : `Message ${index + 1}`}
                  </h4>
                  <button
                    onClick={() => handleCopy(content.trim())}
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md transition shadow-sm"
                  >
                    Copy
                  </button>
                </div>
                <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {content.trim().split("\n").map((line, i) => (
                    <p key={i}>{line.trim()}</p>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      )}
    </div>
  );
};
