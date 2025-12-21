import { CONTACT_INFO } from "@/app/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tenpoints Braille. We are awaiting sufficient funding to take Tenpoints Braille to market at full scale.",
};

export default function Contact() {
  return (
    <main className="flex flex-1 flex-col items-center rounded-lg bg-white">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-light text-gray-900 md:mb-8 md:text-4xl">CONTACT</h1>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
          <p>
            We are awaiting sufficient funding to take Tenpoints Braille to market at full scale.
            If you are interested, and want to be part of our journey, you can help us with any
            little contribution you can make. Please get in touch with us to know how we can take
            this forward.
          </p>
        </div>

        {/* Contact Form */}
        <form className="mt-8 space-y-4">
          {/* Name and Subject Row */}
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              className="flex-1 border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 focus:border-gray-400 focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              required
              className="flex-1 border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 focus:border-gray-400 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 focus:border-gray-400 focus:outline-none"
          />

          {/* Message Field */}
          <textarea
            name="message"
            placeholder="Message *"
            required
            rows={8}
            className="w-full resize-none border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 focus:border-gray-400 focus:outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-gray-900"
          >
            SEND
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-8 flex flex-col gap-6 text-sm text-gray-800 md:mt-12 md:flex-row md:justify-between md:gap-4">
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <span className="text-base md:text-lg">{CONTACT_INFO.email}</span>
          </div>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <span className="text-base md:text-lg">{CONTACT_INFO.phone}</span>
          </div>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-base md:text-lg">{CONTACT_INFO.location}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
