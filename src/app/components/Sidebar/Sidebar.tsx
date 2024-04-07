"use client";

import PruductCarousel from "./PruductCarousel/PruductCarousel";
import styles from "./Sidebar.module.scss";
import SwipeableTextMobileStepper from "./Slider/Slider";
import { TopSale } from "./TopSale/TopSale";
import Сonsultation from "./Сonsultation/Сonsultation";
import { useGetProductsQuery } from "@/store/product/product.api";
import { Typography } from "@mui/material";
import React, { FC } from "react";

const Sidebar: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(6)
  const productsToShow = data ? data.slice(0, 5) : [];

  console.log(data)

  return (
    <nav>
      <div className={styles.sidebar}>
        <SwipeableTextMobileStepper />
      </div>
      <div className={styles.cards}>
        <PruductCarousel />
      </div>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        <div className="text-red">{error.toString()}</div>
      ) : (
        <div className={styles.topSale}>
          <Typography className={styles.title}>Топы продаж</Typography>
          <hr className={styles.hr} />
          <div className={styles.container}>
            {productsToShow?.map((product) => (
              <TopSale key={product.id} product={product}/>
            ))}
          </div>
        </div>
      )}
      <div className={styles.consultation}>
        <Сonsultation />
      </div>
    </nav>
  );
};

export default Sidebar;
