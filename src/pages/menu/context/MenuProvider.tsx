import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import menu from "../../menu/menu.json";

interface MenuContextType {
  menuName: string;
  setMenuName: (name: string) => void;
  menuItems: any[];
  fetchMenuItems: () => void;
  breadcrumbs: string[];
  setBreadcrumbs: (breadcrumbs: string[]) => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuName, setMenuName] = useState<string>("");
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const { pathname } = useLocation();

  // mock data from API
  const fetchMenuItems = async () => {
    try {
      // const response = await axios.get("/");
      // const data = await response.json();
      setMenuItems(menu);
      setBreadcrumbs([]);
      console.log(menu);
    } catch (error) {
      console.log("Error fetching menu items:", error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, [menuItems]);

  useEffect(() => {
    if (!pathname.startsWith("/store-operation/")) {
      setMenuName("");
      setBreadcrumbs([]);
    }
  }, [pathname, setMenuName]);

  return (
    <MenuContext.Provider
      value={{
        menuName,
        setMenuName,
        menuItems,
        fetchMenuItems,
        breadcrumbs,
        setBreadcrumbs,
      }}
    >
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
