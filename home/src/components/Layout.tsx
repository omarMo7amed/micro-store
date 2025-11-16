import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

export default function Layout() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Home />
      </main>
      <Footer />
    </>
  );
}
