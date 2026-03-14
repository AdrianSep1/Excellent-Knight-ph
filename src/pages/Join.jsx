import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
import FooterSection from "../components/landing/FooterSection";

const initialForm = {
  control_number: "", date_submitted: "", full_name: "", birthdate: "",
  address: "", facebook: "", contact_number: "", telephone: "",
  moto_unit: "", moto_year: "", moto_version: "", moto_color: "",
  plate_number: "", emergency_contact_name: "", emergency_contact_number: "", reference: "",
};

const Field = ({ label, name, type = "text", placeholder, optional = false, form, onChange }) => (
  <div>
    <label className="block text-xs text-yellow-400 font-bold tracking-widest mb-2">
      {label}{" "}
      {!optional && <span className="text-red-400">*</span>}
      {optional && <span className="text-gray-600 font-normal normal-case tracking-normal"> (Optional)</span>}
    </label>
    <input
      type={type}
      name={name}
      value={form[name]}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
    />
  </div>
);

export default function Join() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const required = ["full_name", "birthdate", "address", "facebook", "contact_number", "moto_unit", "moto_year", "moto_version", "moto_color", "plate_number", "emergency_contact_name", "emergency_contact_number"];
    for (const field of required) {
      if (!form[field]) { setError("Please fill in all required fields."); return; }
    }

    setLoading(true);
    try {
      const res = await fetch("https://sheetdb.io/api/v1/kwmbfq67cz6q8", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{
            control_number: form.control_number,
            date_submitted: new Date().toLocaleDateString("en-PH"),
            full_name: form.full_name,
            birthdate: form.birthdate,
            address: form.address,
            facebook: form.facebook,
            contact_number: form.contact_number,
            telephone: form.telephone,
            motorcycle: `${form.moto_unit} ${form.moto_year} ${form.moto_version}`,
            color: form.moto_color,
            plate_number: form.plate_number,
            emergency_contact_name: form.emergency_contact_name,
            emergency_contact_number: form.emergency_contact_number,
            reference: form.reference,
            submitted_at: new Date().toLocaleString("en-PH"),
          }]
        }),
      });

      const json = await res.json();
      console.log("SheetDB response:", json);
      if (!res.ok) throw new Error("SheetDB error: " + res.status);

      // @ts-ignore
      const emailjsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (emailjsKey && emailjsKey !== "your_emailjs_public_key") {
        await emailjs.send(
          // @ts-ignore
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          // @ts-ignore
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          { name: form.full_name, location: form.address, contact: form.contact_number, time: new Date().toLocaleString("en-PH") },
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

  const f = { form, onChange: handleChange };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 px-4 py-24 sm:px-6">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-400 text-xs tracking-widest font-bold mb-2">MEMBERSHIP APPLICATION</p>
            <h1 className="text-3xl sm:text-4xl font-black text-white">JOIN THE BROTHERHOOD</h1>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Fill out the form completely. Fields marked <span className="text-red-400">*</span> are required.
            </p>
          </div>

          {submitted ? (
            <div className="bg-yellow-600/10 border border-yellow-600/40 rounded-xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-yellow-600/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Application Submitted!</h3>
              <p className="text-gray-400 text-sm">
                Thank you, <span className="text-yellow-400 font-semibold">{form.full_name}</span>. We'll review your application and reach out soon.
              </p>
              <div className="flex gap-3 justify-center mt-6">
                <button onClick={() => { setSubmitted(false); setForm(initialForm); }} className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Submit another</button>
                <span className="text-gray-700">·</span>
                <button onClick={() => navigate("/")} className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Back to Home</button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="CONTROL NUMBER" name="control_number" placeholder="Ex: MCC-001" optional {...f} />
                <div>
                  <label className="block text-xs text-yellow-400 font-bold tracking-widest mb-2">DATE SUBMITTED</label>
                  <input
                    type="text"
                    readOnly
                    value={new Date().toLocaleDateString("en-PH")}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-400 text-sm focus:outline-none cursor-default"
                  />
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <p className="text-yellow-400 text-xs font-bold tracking-widest mb-5">PERSONAL INFORMATION</p>
                <div className="space-y-5">
                  <Field label="NAME OF MEMBER (Last Name, First Name, MI)" name="full_name" placeholder="Dela Cruz, Juan, A." {...f} />
                  <Field label="BIRTHDATE" name="birthdate" type="date" placeholder="" {...f} />
                  <Field label="COMPLETE PRESENT ADDRESS" name="address" placeholder="House No., Street, Barangay, City, Province" {...f} />
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <p className="text-yellow-400 text-xs font-bold tracking-widest mb-5">CONTACT INFORMATION</p>
                <div className="space-y-5">
                  <Field label="ACTIVE FACEBOOK ACCOUNT" name="facebook" placeholder="facebook.com/yourprofile" {...f} />
                  <Field label="ACTIVE CONTACT NUMBER" name="contact_number" type="tel" placeholder="09XX XXX XXXX" {...f} />
                  <Field label="ACTIVE TELEPHONE NUMBER" name="telephone" type="tel" placeholder="(032) XXX-XXXX" optional {...f} />
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <p className="text-yellow-400 text-xs font-bold tracking-widest mb-5">MOTORCYCLE INFORMATION</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <Field label="UNIT" name="moto_unit" placeholder="Honda, Yamaha..." {...f} />
                  <Field label="YEAR MODEL" name="moto_year" placeholder="2022" {...f} />
                  <Field label="VERSION" name="moto_version" placeholder="ADV 160, NMAX..." {...f} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                  <Field label="COLOR" name="moto_color" placeholder="Pearl White" {...f} />
                  <Field label="PLATE NUMBER" name="plate_number" placeholder="ABC 1234" {...f} />
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <p className="text-yellow-400 text-xs font-bold tracking-widest mb-5">EMERGENCY CONTACT</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="NAME OF CONTACT PERSON" name="emergency_contact_name" placeholder="Full Name" {...f} />
                  <Field label="CONTACT NUMBER" name="emergency_contact_number" type="tel" placeholder="09XX XXX XXXX" {...f} />
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <Field label="REFERENCE (Rider who referred you)" name="reference" placeholder="Name of referring rider" optional {...f} />
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
                ) : "SUBMIT APPLICATION"}
              </button>
            </form>
          )}
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
