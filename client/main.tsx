import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import "@/index.css";

const App = () => (
  <div className="container mx-auto px-4">
    <Hero />
    <Features />
    <Pricing />
    <CallToAction />
    <section className="py-16 px-4 bg-white text-center" id="contact">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-8 text-muted-foreground">Have a question or want a demo? Fill out the form and we’ll get back to you shortly.</p>
      <form name="contact" method="POST" data-netlify="true" className="max-w-2xl mx-auto space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <input name="name" required placeholder="Your Name" className="w-full border px-4 py-2 rounded-md" />
        <input type="email" name="email" required placeholder="Your Email" className="w-full border px-4 py-2 rounded-md" />
        <textarea name="message" required placeholder="Your Message" className="w-full border px-4 py-2 rounded-md"></textarea>
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md">Send Message</button>
      </form>
    </section>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);