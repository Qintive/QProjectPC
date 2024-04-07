import { Typography } from "@mui/material";
import styles from "./PruductCarousel.module.scss";

import * as React from "react";

const PruductCarousel = () => {
  const cards = [
    {
      mainName: "Игровые",
      name: "Решения",
      imgPath: "/images/CardsOffer/swords.png",
    },
    {
      mainName: "Офисные",
      name: "Решения",
      imgPath: "/images/CardsOffer/Office.svg",
    },
    {
      mainName: "Специальные",
      name: "Решения",
      imgPath: "/images/CardsOffer/Special.svg",
    },
  ];

  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <div key={card.name} className={styles.cardContent}>
          <div>
            <img
            src={card.imgPath}
            height={200}
            width={200}
            />
          </div>
          <div className={styles.text}>
          <Typography className={styles.mainName}>
              {card.mainName}
            </Typography>
            <Typography className={styles.name}>
              {card.name}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PruductCarousel;