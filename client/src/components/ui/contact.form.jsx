import React, { useState, useEffect } from "react";
import { Mail, User, Building2, Tag, MessageCircle, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const TAGS = [
  "Full-Stack Web Development",
  "Frontend Development ",
  "Backend Development ",
  "Responsive & User-Centric Design",
  "Web & App Performance Optimization",
  "API Integration & Automation",
  "Database Design & Management",
  "Machine Learning Web Projects",
  "Remote Work",
  "Part-Time",
  "Hourly Projects",
  "Freelance",
  "On-Site / Contract Work",
  "Project Consultation & Support",
];

export const ContactForm = () => {
  const initialForm = {
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    tags: [TAGS[0]],
  };

  const [form, setForm] = useState(initialForm);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setCharCount(value.length);
  };

  const handleTagClick = (tag) => {
    setForm((prev) => {
      const tags = prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags };
    });
  };
  // Formspree hook (uses VITE_FORMSPREE_KEY)
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);

  // Local flash message to show success/failure and allow auto-hide
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    if (state.succeeded) {
      // Clear form fields on success and show message
      setForm(initialForm);
      setCharCount(0);
      setFlash({ type: "success", text: "Message sent — thank you!" });
      const t = setTimeout(() => setFlash(null), 4000);
      return () => clearTimeout(t);
    }
    if (state.errors && state.errors.length > 0) {
      setFlash({ type: "error", text: "Failed to send message. Please try again." });
      const t = setTimeout(() => setFlash(null), 4000);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [state.succeeded, state.errors]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200 backdrop-blur-md"
    >
      <div className="flex flex-col sm:flex-row gap-4 mb-4 ">
        <div className="flex-1 ">
          <div className="relative ">
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#b78654] text-base bg-gray-100"
              placeholder="Name *"
              autoComplete="name"
            />
            <User className="absolute left-2 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#b78654] text-base bg-gray-100"
              placeholder="@email.com"
              autoComplete="email"
            />
            <Mail className="absolute left-2 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="relative">
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#b78654] text-base bg-gray-100"
            placeholder="Company Name (optional)"
            autoComplete="organization"
          />
          <Building2 className="absolute left-2 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
      <div className="mb-4">
        <div className="relative">
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[#b78654] text-base bg-gray-100"
            placeholder="Subject"
          />
          <Tag className="absolute left-2 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          What's on your mind?
        </label>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-1 rounded-full cursor-pointer border text-xs font-medium transition-colors duration-150 flex items-center gap-1
                ${
                  form.tags.includes(tag)
                    ? "bg-[#b78654] text-white border-[#b78654] shadow-md"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-blue-50"
                }
              `}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            maxLength={500}
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#b78654] text-base bg-gray-100 resize-none min-h-[100px]"
            placeholder="Type your message..."
          />
          <MessageCircle className="absolute left-2 top-3 text-gray-400 w-5 h-5" />
        </div>
        <div className="text-right text-xs text-gray-500 mt-1">
          {charCount}/500 characters
        </div>
      </div>
      {/* Hidden input for tags (comma separated) */}
      <input type="hidden" name="tags" value={form.tags.join(", ")} />
      {/* Hidden input for company (optional, but always sent) */}
      <input type="hidden" name="company" value={form.company} />
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full flex items-center justify-center gap-2 bg-[#b78654] hover:bg-[#a97443] cursor-pointer text-white font-semibold py-3 rounded-xl text-lg shadow-lg transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <>
            <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-1" />
            Send Message
          </>
        )}
      </button>

      {/* Flash message (auto-hide) */}
      {flash && (
        <p className="mt-3 text-sm">
          {flash.type === "success" ? (
            <span className="text-green-600">{flash.text}</span>
          ) : (
            <span className="text-red-600">{flash.text}</span>
          )}
        </p>
      )}
    </form>
  );
};
