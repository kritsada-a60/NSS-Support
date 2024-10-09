import { useMenu } from "../menu/context/MenuProvider";

const Information = () => {
  const { breadcrumbs } = useMenu();
  return (
    <div>
      <p
        style={{
          color: "#333333",
          fontSize: "32px",
          fontWeight: "700",
          margin: 0,
        }}
      >
        {breadcrumbs.length > 0
          ? breadcrumbs[breadcrumbs.length - 1]
          : "Default Title"}
      </p>
    </div>
  );
};

export default Information;
