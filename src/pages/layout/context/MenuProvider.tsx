import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";

interface MenuContextType {
  menuName: string;
  setMenuName: (name: string) => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuName, setMenuName] = useState<string>("");
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.startsWith("/store-operation/")) {
      setMenuName("");
    }
  }, [pathname, setMenuName]);

  return (
    <MenuContext.Provider value={{ menuName, setMenuName }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
