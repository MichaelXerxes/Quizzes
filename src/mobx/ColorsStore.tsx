import { createContext, useContext, useState, ReactNode } from "react";
import { DEFAULT_COLORS } from "../consts/COLORS";

interface ColorContextProps {
  colors: typeof DEFAULT_COLORS;
  setColors: (newColors: typeof DEFAULT_COLORS) => void;
}

const ColorContext = createContext<ColorContextProps>({
  colors: DEFAULT_COLORS,
  setColors: () => {},
});

export const useColorContext = () => useContext(ColorContext);
interface ColorProviderProps {
  children: ReactNode;
}
export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [colors, setColors] = useState<typeof DEFAULT_COLORS>(DEFAULT_COLORS);

  const updateColors = (newColors: typeof DEFAULT_COLORS) => {
    setColors({ ...colors, ...newColors });
  };

  return (
    <ColorContext.Provider value={{ colors, setColors: updateColors }}>
      {children}
    </ColorContext.Provider>
  );
};
