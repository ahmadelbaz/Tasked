import { createContext, useContext, useState, type ReactNode } from "react";

const colorContext = createContext({
  color: "#e7fe55",
  setAccentColor: (newColor: string) => {},
});

interface MyProviderProps {
  children: ReactNode;
}

export default function ColorProvider({ children }: MyProviderProps) {
  const [color, setColor] = useState("#e7fe55");
  function setAccentColor(newColor: string) {
    setColor(newColor);
  }
  return <div> {children}</div>;
}

export const useColor = () => {
  const context = useContext(colorContext);
  if (!context) {
    throw `Error in context`;
  }

  return context;
};
