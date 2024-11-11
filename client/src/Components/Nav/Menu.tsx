import React, { Dispatch, SetStateAction } from "react";
import NavigationMenu from "./NavigationMenu";

interface MenuProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
  shouldShowMenu: boolean;
  setShouldShowMenu: Dispatch<SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    props.shouldShowMenu && (
      <div
        style={{
          //gridArea: "navGridAreaCol3",
          width: "356px",
          textAlign: "left",
          border: "1px solid black",
        }}
      >
        <NavigationMenu
          navigationSelected={props.navigationSelected}
          setNavigationSelected={props.setNavigationSelected}
        />
      </div>
    )
  );
};

export default Menu;
