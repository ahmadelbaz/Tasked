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
  const [color, setColor] = useState("68 99% 66%");

  const setAccentColor = (newColor: string) => {
    console.log(`Now we set a new color ${newColor}`);
    setColor(newColor);
    document.documentElement.style.setProperty("--primary", newColor);
    document.documentElement.style.setProperty("--accent", newColor);
  };
  return (
    <colorContext.Provider value={{ color, setAccentColor }}>
      {children}
    </colorContext.Provider>
  );
}

export const useColor = () => {
  console.log(`Are we here ?`);
  const context = useContext(colorContext);
  if (!context) {
    throw `Error in context`;
  }

  return context;
};
