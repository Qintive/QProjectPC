import style from "../Basket/Basket.module.scss";
import Link from "next/link";
import React, { FC } from "react";
import { BsFillBasketFill } from "react-icons/bs";

const Basket: FC = () => {
  return (
    <li className={style.li}>
      <Link href="/basket" legacyBehavior>
        <a className={style.icon}>
          <BsFillBasketFill />
        </a>
      </Link>
    </li>
  );
};

export default Basket;
