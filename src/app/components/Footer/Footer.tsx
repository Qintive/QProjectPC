'use client'

import { useSelector } from "react-redux";
import styles from "./Footer.module.scss";
import React, { FC } from "react";
import { useActions } from "@/hooks/useActions";



const Footer:FC = () => {

  const goods = [
   {id: 1, name: "PC1"},
   {id: 3, name: "PC3"},
   {id: 5, name: "PC5"},
  ]




  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.menu}>
        <span>Главная</span>
        <span>Каталог</span>
        <span>Контакты</span>
        <span>О нас</span>
      </div>
      <span className={styles.privacyPolicy}>
        © 2023 QProjectPC Все права защищены
      </span>
    </div>
  );
};

export default Footer;
