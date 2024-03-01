import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <div className="mt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
