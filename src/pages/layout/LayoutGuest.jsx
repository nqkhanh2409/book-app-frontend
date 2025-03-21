import { Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const LayoutGuest = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 font-primary">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
