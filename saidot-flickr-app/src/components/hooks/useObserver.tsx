import { useState, useEffect } from "react";
// This function will scroll the window to the top
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
function useToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [setShowButton]);
  return { showButton, scrollToTop };
}

export default useToTopButton;
