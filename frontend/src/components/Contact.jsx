import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send, User } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const GMAIL_TO = "sativostudios@gmail.com";
const WHATSAPP_NUMBER = "919061673057"; // +91 90616 73057

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const validate = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("Please fill in your name, phone and message.");
      return false;
    }
    return true;
  };

  const buildBody = () =>
    `Hi Sativo Studios,%0A%0AMy name is ${encodeURIComponent(form.name)}.%0APhone: ${encodeURIComponent(
      form.phone
    )}%0A%0A${encodeURIComponent(form.message)}%0A%0A— Sent via sativostudios.com`;

  const sendGmail = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`New project enquiry from ${form.name}`);
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_TO}&su=${subject}&body=${buildBody()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    const text = `Hi Sativo Studios! 👋%0A%0AI'm ${encodeURIComponent(
      form.name
    )} (${encodeURIComponent(form.phone)}).%0A%0A${encodeURIComponent(form.message)}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8"
      data-testid="contact-section"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 bg-white/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(26,107,255,0.08)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left visual side */}
            <div className="lg:col-span-5 relative bg-[#0A0A0A] text-white p-8 sm:p-12 lg:p-14 overflow-hidden">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#1A6BFF]/40 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#1A6BFF]/30 blur-3xl" />
              <div className="relative">
                <span className="inline-block font-body text-xs uppercase tracking-[0.3em] text-[#7DA8FF] font-semibold mb-6">
                  — Let's build something
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl tracking-tighter leading-[1.05]">
                  Got an idea?
                  <br />
                  <span className="text-[#7DA8FF] italic font-light">We're listening.</span>
                </h2>
                <p className="font-body mt-6 text-sm sm:text-base text-white/70 leading-relaxed">
                  Drop us a line and pick the channel that's fastest for you. We reply
                  within a few hours, every working day.
                </p>

                <div className="mt-10 space-y-4">
                  <a
                    href={`mailto:${GMAIL_TO}`}
                    data-testid="contact-email-link"
                    className="flex items-center gap-3 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-white/10 group-hover:bg-[#1A6BFF] transition-colors flex items-center justify-center">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="font-body text-sm">{GMAIL_TO}</span>
                  </a>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    data-testid="contact-phone-link"
                    className="flex items-center gap-3 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-white/10 group-hover:bg-[#1A6BFF] transition-colors flex items-center justify-center">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="font-body text-sm">+91 90616 73057</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right form side */}
            <motion.form
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 p-8 sm:p-12 lg:p-14"
              data-testid="contact-form"
            >
              <div className="space-y-5">
                <Field
                  icon={<User className="h-4 w-4" />}
                  label="Your name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  testid="contact-name-input"
                />
                <Field
                  icon={<Phone className="h-4 w-4" />}
                  label="Phone number"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+91 98765 43210"
                  testid="contact-phone-input"
                  type="tel"
                />
                <div>
                  <label className="font-body text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">
                    Your message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="Tell us about your brand, goals, timeline…"
                    data-testid="contact-message-input"
                    className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-[#F9F9FB] px-4 py-3 font-body text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:border-[#1A6BFF] focus:ring-4 focus:ring-[#1A6BFF]/10 transition-all"
                  />
                </div>

                {error && (
                  <p
                    className="font-body text-sm text-red-600"
                    data-testid="contact-error-message"
                  >
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <MagneticButton strength={0.25}>
                    <button
                      type="button"
                      onClick={sendGmail}
                      data-testid="contact-send-gmail-button"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-4 text-sm font-medium hover:bg-[#1A6BFF] transition-all"
                    >
                      <Send className="h-4 w-4" />
                      Send via Gmail
                    </button>
                  </MagneticButton>
                  <MagneticButton strength={0.25}>
                    <button
                      type="button"
                      onClick={sendWhatsApp}
                      data-testid="contact-send-whatsapp-button"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-4 text-sm font-medium hover:bg-[#1ebe57] transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send via WhatsApp
                    </button>
                  </MagneticButton>
                </div>
                <p className="font-body text-xs text-zinc-400 pt-1">
                  Clicking either opens a pre-filled message — you just hit send.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ icon, label, name, value, onChange, placeholder, testid, type = "text" }) => (
  <div>
    <label className="font-body text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">
      {label}
    </label>
    <div className="mt-2 relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">{icon}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={testid}
        className="w-full rounded-full border border-black/10 bg-[#F9F9FB] pl-11 pr-4 py-3.5 font-body text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:border-[#1A6BFF] focus:ring-4 focus:ring-[#1A6BFF]/10 transition-all"
      />
    </div>
  </div>
);
