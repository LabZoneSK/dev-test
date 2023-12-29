import React, { useEffect } from "react";

import AppRouter from "./AppRouter";

const App = () => {
  useEffect(() => {
    // define the handler function
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
