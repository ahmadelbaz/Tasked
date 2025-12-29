import { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import WhatsNewDialog from "./components/WhatsNewDialog";
import { appVersion } from "./config/consts";

const App = () => {
  // Check if user have seen what's new dialog once
  const hasSeenWhatsNewDialog =
    localStorage.getItem(`${appVersion}`) === "true";

  // What's new dialog
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const closeNewsDialog = () => {
    localStorage.setItem(`${appVersion}`, "true");
    setIsDialogOpen(false);
  };
  return (
    // When user never seen what's new dialog , w will show it to them
    // And store that in local storage on onClose()
    <div>
      {!hasSeenWhatsNewDialog && (
        <WhatsNewDialog isOpen={isDialogOpen} onClose={closeNewsDialog} />
      )}
      <TodoContainer />
    </div>
  );
};

export default App;
