import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthPage = () => {
  const [email, setEmail] = useState("");
  const { signIn } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signIn(email);
    alert("Check your email for the login link.");
  };

  return (
    <div className="font-[Outfit] min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border-2 border-gray-300"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login via Email
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Enter your email to receive a magic login link.
        </p>

        <input
          type="email"
          className="border-2 border-gray-300 p-3 w-full rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Magic Link
        </button>
      </form>
    </div>
  );
};
