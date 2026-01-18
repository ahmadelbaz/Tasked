import { createContext, useContext, useState, type ReactNode } from "react";

type ColorContextType = {
  color: string;
  setAccentColor: (newColor: string) => void;
};

const colorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

export default function ColorProvider({ children }: ColorProviderProps) {
  // Get stored color
  const storedColor = localStorage.getItem(`color`);
  const [color, setColor] = useState(storedColor ?? "68 99% 66%");

  const setAccentColor = (newColor: string) => {
    setColor(newColor);
    document.documentElement.style.setProperty("--primary", newColor);
    document.documentElement.style.setProperty("--accent", newColor);
    localStorage.setItem("color", newColor);
  };
  return (
    <colorContext.Provider value={{ color, setAccentColor }}>
      {children}
    </colorContext.Provider>
  );
}

export const useColor = () => {
  const context = useContext(colorContext);
  if (!context) {
    throw `Error in context`;
  }

  return context;
};
