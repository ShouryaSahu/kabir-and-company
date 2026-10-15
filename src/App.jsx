
import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import IntroAnimation from "./components/IntroAnimation";

function AppLayout() {
  const [showIntro, setShowIntro] = useState(true);

  const finishIntro = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={finishIntro} />}

      <div className={showIntro ? "invisible" : "site-reveal"}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:categoryId" element={<CategoryPage />} />
          <Route
            path="*"
            element={
              <main className="px-5 py-20 text-center">
                <h2 className="text-2xl font-bold">Page not found</h2>
                <a href="/" className="mt-4 inline-block text-[#163a63] underline">
                  Return Home
                </a>
              </main>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
