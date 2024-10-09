import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import menu from "../../menu/menu.json";

interface MenuItem {
  id: string;
  screenId: string;
  menuName: string;
  active: boolean;
  parentId: string | null;
  menulevel: number;
  children?: MenuItem[];
}

interface MenuContextType {
  menuItems: MenuItem[];
  fetchMenuItems: () => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const groupMenuItems = (items: MenuItem[]): MenuItem[] => {
    const itemMap: { [key: string]: MenuItem } = {};
    const rootItems: MenuItem[] = [];

    items.forEach((item) => {
      itemMap[item.id] = { ...item, children: [] };
    });

    items.forEach((item) => {
      if (item.parentId === null) {
        rootItems.push(itemMap[item.id]);
      } else {
        const parent = itemMap[item.parentId];
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(itemMap[item.id]);
        }
      }
    });

    return rootItems;
  };

  const fetchMenuItems = async () => {
    try {
      const groupMenu = groupMenuItems(menu);
      setMenuItems(groupMenu);
    } catch (error) {
      console.log("Error fetching menu items:", error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        fetchMenuItems,
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
