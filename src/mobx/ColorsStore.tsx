import { createContext, useContext, useState, ReactNode } from "react";
import { COLORS } from "../consts/COLORS";

interface ColorContextProps {
  colors: typeof COLORS;
  setColors: (newColors: typeof COLORS) => void;
}

const ColorContext = createContext<ColorContextProps>({
  colors: COLORS,
  setColors: () => {},
});

export const useColorContext = () => useContext(ColorContext);
interface ColorProviderProps {
  children: ReactNode;
}
export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [colors, setColors] = useState<typeof COLORS>(COLORS);

  const updateColors = (newColors: typeof COLORS) => {
    setColors({ ...colors, ...newColors });
  };

  return (
    <ColorContext.Provider value={{ colors, setColors: updateColors }}>
      {children}
    </ColorContext.Provider>
  );
};
