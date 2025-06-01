import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import "@/index.css";

const App = () => (
  <div className="container mx-auto px-4">
    <Hero />
    <CallToAction />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);