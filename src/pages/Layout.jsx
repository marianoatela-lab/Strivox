import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";

function Layout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />

    </>
  );
}

export default Layout;