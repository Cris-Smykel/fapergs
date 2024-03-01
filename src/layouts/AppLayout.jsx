import { Outlet } from "react-router-dom";
import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout() {
  const viewsRef = {
    inicio: useRef(null),
    sobre: useRef(null),
    testimonial: useRef(null),
    faqs: useRef(null),
  };

  return (
    <div>
      <Header viewsRef={viewsRef} />

      <div className="mt-20">
        <Outlet context={viewsRef} />
      </div>

      <Footer />
    </div>
  );
}
