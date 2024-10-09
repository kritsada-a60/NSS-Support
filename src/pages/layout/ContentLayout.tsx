import { useNavigate, useParams } from "react-router-dom";
import { useMenu } from "../menu/context/MenuProvider";
import AlcoholicIslands from "../information-mgm/child/alcoholic/AlcoholicIslands/AlcoholicIslands";
import EditAlcoholicIsands from "../information-mgm/child/alcoholic/AlcoholicIslands/EditAlcoholicIsands";

const ContentLayout = () => {
  const params = useParams();
  const { menuItems } = useMenu();
  const navigate = useNavigate();

  const { levelA, levelB, levelC, levelD } = params;

  // Get the menu name based on the current route parameters
  const getMenuName = () => {
    const levelAMenu = menuItems.find((menu) => menu.screenId === levelA);
    if (!levelAMenu) return "";
    if (levelD) {
      if (levelD.startsWith("Edit")) return "Edit";
    }
    if (levelC) {
      const levelBMenu = levelAMenu.children?.find(
        (menu) => menu.screenId === levelB
      );
      const levelCMenu = levelBMenu?.children?.find(
        (menu) => menu.screenId === levelC
      );
      return (
        levelCMenu?.menuName || levelBMenu?.menuName || levelAMenu.menuName
      );
    }

    if (levelB) {
      const levelBMenu = levelAMenu.children?.find(
        (menu) => menu.screenId === levelB
      );
      return levelBMenu?.menuName || levelAMenu.menuName;
    }

    return levelAMenu.menuName;
  };

  const getLevelAComponent = () => {
    switch (levelA) {
      default:
        return (
          <div>
            <h2>Default Level A Component</h2>
            <p>Level A: {levelA}</p>
          </div>
        );
    }
  };

  const getLevelBComponent = () => {
    switch (levelB) {
      default:
        return (
          <div>
            <h2>Default Level B Component</h2>
            <p>Level A: {levelA}</p>
            <p>Level B: {levelB}</p>
          </div>
        );
    }
  };

  const getLevelCComponent = () => {
    switch (levelC) {
      case "ALC103":
        return <AlcoholicIslands />;
      default:
        return (
          <div>
            <h2>Default Level C Component</h2>
            <p>Level A: {levelA}</p>
            <p>Level B: {levelB}</p>
            <p>Level C: {levelC}</p>
          </div>
        );
    }
  };

  const getLevelDComponent = () => {
    switch (levelD) {
      case "EditALC103":
        return <EditAlcoholicIsands />;
      default:
        return (
          <div>
            <h2>Default Level D Component</h2>
            <p>Level A: {levelA}</p>
            <p>Level B: {levelB}</p>
            <p>Level C: {levelC}</p>
            <p>Level C: {levelD}</p>
          </div>
        );
    }
  };

  const renderLevelComponent = () => {
    if (levelD) return getLevelDComponent();
    if (levelC) return getLevelCComponent();
    if (levelB) return getLevelBComponent();
    if (levelA) return getLevelAComponent();
    return null;
  };

  return (
    <div style={{ color: "red", width: "100%" }}>
      <p
        style={{
          color: "#333333",
          fontSize: "32px",
          fontWeight: "700",
          margin: 0,
          lineHeight: "41.6px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {getMenuName()}
      </p>

      {renderLevelComponent()}

      {/* <Outlet /> */}
    </div>
  );
};

export default ContentLayout;
