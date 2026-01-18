import { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import WhatsNewDialog from "./components/WhatsNewDialog";
import { appVersion } from "./config/consts";
import ColorProvider from "./context/ColorContext";

const App = () => {
  // Check if user have seen what's new dialog once
  const hasSeenWhatsNewDialog =
    localStorage.getItem(`${appVersion}`) === "true";

  // Get stored color
  const storedColor = localStorage.getItem(`color`);

  if (storedColor) {
    document.documentElement.style.setProperty("--primary", storedColor);
    document.documentElement.style.setProperty("--accent", storedColor);
  }

  // What's new dialog
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const closeNewsDialog = () => {
    localStorage.setItem(`${appVersion}`, "true");
    setIsDialogOpen(false);
  };
  return (
    // When user never seen what's new dialog , w will show it to them
    // And store that in local storage on onClose()
    <ColorProvider>
      <div>
        {!hasSeenWhatsNewDialog && (
          <WhatsNewDialog isOpen={isDialogOpen} onClose={closeNewsDialog} />
        )}
        <TodoContainer />
      </div>
    </ColorProvider>
  );
};

export default App;
