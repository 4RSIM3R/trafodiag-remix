import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer";
import Header from "~/components/header";

export default function Layout() {
  return (
    <div className="bg-white h-screen">
      <Header />
      <div className="mx-auto max-w-7xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
