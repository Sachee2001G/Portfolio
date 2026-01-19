"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Toast from "./ui/Toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget; // store reference to form immediately
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setLoading(false);

    if (res.ok) {
      setToast({ message: "Message sent successfully!", type: "success" });
      form.reset(); // use stored reference, safer
    } else {
      setToast({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    }

    setTimeout(() => setToast(null), 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden w-full">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-bebas tracking-wide">
            Let's create something together
          </h2>
          <p className="text-xl text-gray-600">
            Have an idea? I'd love to help you bring it to life. Send me a
            message and let's start a conversation.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 space-y-6 text-left bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-black text-white font-medium text-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </motion.div>
      </div>

      <footer className="mt-24 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Sachee Ghimire. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
