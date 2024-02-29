import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <div className="mt-20">
        <Outlet />
      </div>
    </div>
  );
}
