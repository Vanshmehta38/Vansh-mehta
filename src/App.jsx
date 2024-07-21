import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { PulseLoader } from "react-spinners";
import Home from "./pages/Home";
import GoToTopButton from "./components/utils/GotoTop";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent context menu and keyboard shortcuts
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey &&
          (event.key === "c" || event.key === "u" || event.key === "s")) || // Ctrl+C, Ctrl+U, Ctrl+S
        event.key === "F12" // F12
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Loading timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup
    return () => {
      clearTimeout(timer);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <PulseLoader color="#f6c400" height={4} />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <PulseLoader color="#f6c400" height={4} />
        </div>
      ) : (
        <>
          <div className="no-select">
            <Home />
            <GoToTopButton />
          </div>
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </Suspense>
  );
};

export default App;
