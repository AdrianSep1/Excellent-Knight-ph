import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function JoinSection() {
  const [form, setForm] = useState({ name: "", location: "", contact: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.location || !form.contact) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      // Save to Google Sheets via SheetDB
      const res = await fetch("https://sheetdb.io/api/v1/m3o8aed3qqncx", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            name: form.name,
            location: form.location,
            contact: form.contact,
            submitted_at: new Date().toLocaleString("en-PH"),
          }
        }),
      });

      const json = await res.json();
      console.log("SheetDB response:", json);

      if (!res.ok) throw new Error("SheetDB error: " + res.status);

      // Send email via EmailJS (only if configured)
      const emailjsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (emailjsKey && emailjsKey !== "your_emailjs_public_key") {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: form.name,
            location: form.location,
            contact: form.contact,
            time: new Date().toLocaleString("en-PH"),
          },
          emailjsKey
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join" className="bg-gray-950 py-16 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-yellow-400 text-xs tracking-widest font-bold mb-2">MEMBERSHIP</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">JOIN THE BROTHERHOOD</h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Interested in becoming an Excellent Knight? Fill out the form below and we'll get in touch with you.
          </p>
        </div>

        {submitted ? (
          <div className="bg-yellow-600/10 border border-yellow-600/40 rounded-xl p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-yellow-600/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Interest Submitted!</h3>
            <p className="text-gray-400 text-sm">
              Thank you, <span className="text-yellow-400 font-semibold">{form.name}</span>. We'll reach out to you soon.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", location: "", contact: "" }); }}
              className="mt-6 text-xs text-gray-500 hover:text-yellow-400 transition-colors"
            >
              Submit another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 space-y-5">
            <div>
              <label className="block text-xs text-yellow-400 font-bold tracking-widest mb-2">FULL NAME</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Juan dela Cruz"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-yellow-400 font-bold tracking-widest mb-2">LOCATION</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="City, Province"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-yellow-400 font-bold tracking-widest mb-2">CONTACT NUMBER</label>
              <input
                type="tel"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="09XX XXX XXXX"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-black text-sm tracking-widest py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  SUBMITTING...
                </>
              ) : "SUBMIT INTEREST"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
