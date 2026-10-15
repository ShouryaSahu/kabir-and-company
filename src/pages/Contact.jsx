
import { useState } from "react";
import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "919876543210";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "Hello Kabir and Company!",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Product Required: ${form.product}`,
      `Message: ${form.message}`,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <main className="animate-fade-up mx-auto min-h-[60vh] max-w-3xl px-5 py-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#163a63]">
          GET IN TOUCH
        </p>

        <h2 className="mt-3 text-3xl font-bold">Contact Us</h2>

        <p className="mt-3 text-gray-600">
          Contact us for product availability and wholesale enquiries.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition-shadow duration-200 focus:border-[#163a63] focus:ring-2 focus:ring-blue-100"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
              pattern="[+]?[0-9 ()-]{7,20}"
              title="Enter a valid phone number"
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition-shadow duration-200 focus:border-[#163a63] focus:ring-2 focus:ring-blue-100"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="product" className="mb-2 block text-sm font-medium">
              Product Required
            </label>
            <select
              id="product"
              name="product"
              value={form.product}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition-shadow duration-200 focus:border-[#163a63] focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Select a category</option>
              <option>Britannia Biscuits</option>
              <option>Cremica Biscuits</option>
              <option>Kellogg's Products</option>
              <option>Cycle Agarbatti</option>
              <option>Other Products</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition-shadow duration-200 focus:border-[#163a63] focus:ring-2 focus:ring-blue-100"
              placeholder="Tell us what you need"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full px-5 py-3 text-sm sm:w-auto"
          >
            Send Enquiry on WhatsApp
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}
