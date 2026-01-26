"use client";
import { useState } from "react";
import { SectionIntro } from "./sectionintro";
import { Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your interest! We will get back to you within 24 hours.",
    );
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section className="px-4 md:px-24 flex flex-col gap-8 py-32 items-center ">
      <div className="max-w-350">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <SectionIntro
            title="Let's build something together"
            subtitle="Get In Touch"
          >
            Whether you have a detailed project brief or just an idea, we&apos;d
            like to hear from you. We typically respond within 24 hours.
          </SectionIntro>

          {/* Right Column - Form */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-hanuman transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-hanuman transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-hanuman transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-hanuman transition-colors resize-none"
                  placeholder="We're looking to build..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-hanuman cursor-pointer text-white px-8 py-4 rounded-xl hover:bg-hanuman/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
