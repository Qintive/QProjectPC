import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import { IMenu } from "./menu.interface";
import React, { FC } from "react";

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
  return (
    <div className={styles.menu}>
      <ul>
        {items.map((item) => (
          <MenuItem key={item.link} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
