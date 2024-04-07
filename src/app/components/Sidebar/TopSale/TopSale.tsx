import styles from "./TopSale.module.scss";
import { useGetImageQuery } from "@/store/product/product.api";
import { IProduct } from "@/store/product/product.interface";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { FC } from "react";

export const TopSale: FC<{ product: IProduct }> = ({ product }) => {
  const { data: imageUrls, isLoading, error } = useGetImageQuery(product.id);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div className="text-red">{error.toString()}</div>;
  }

  return (
    <div>
      {imageUrls?.imagePaths.map(
        (imageUrl, index) =>
          // Добавим условие для отображения карточки только при совпадении индексов
          index === product.id-1 && (
            <Card
              key={`${product.id}_${index}`} // используйте уникальный ключ для каждой карточки
              sx={{ maxWidth: 500 }}
              className={styles.card}
            >
              <CardMedia
                sx={{ height: 350, width: 350 }}
                image={`http://localhost:3001${imageUrl}`}
                title={product.name}
                className={styles.image}
              />
              <CardContent className={styles.text}>
                <Typography className={styles.goodsName}>
                  {product.name}
                </Typography>
                <Typography className={styles.price}>
                  {product.price}₽
                </Typography>
              </CardContent>
            </Card>
          )
      )}
    </div>
  );
};

/*
import { useGetProductsQuery } from "@/store/product/product.api";
import styles from "./TopSale.module.scss";
import { useActions } from "@/hooks/useActions";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { FC } from "react";
import { CiStar } from "react-icons/ci";
import { useSelector } from "react-redux";
import { IProduct } from "@/store/product/product.interface";

export const TopSale:FC<{product: IProduct}> = ({product}) => {
  const goods = [
    {
      goodsName: "GamingPC15",
      price: 45500 + "₽",
      image: "/images/Goods/GamingPC15.png",
      id: 15,
    },
    {
      goodsName: "GamingPC25",
      price: 45500 + "₽",
      image: "/images/Goods/GamingPC25.png",
      id: 25,
    },
    {
      goodsName: "GamingPC17",
      price: 45500 + "₽",
      image: "/images/Goods/GamingPC17.png",
      id: 17,
    },
    {
      goodsName: "GamingPC34",
      price: 45500 + "₽",
      image: "/images/Goods/GamingPC34.png",
      id: 34,
    },
  ];

  /*const { favorites } = useSelector((state: RootState) => state);

  const { toggleFavorites } = useActions();

  const isExists = favorites.some((g) => g.id === goods[goods.length - 1].id);



  return (
    <div>
      <Typography className={styles.title}>Топы продаж</Typography>
      <hr className={styles.hr} />
      <div className={styles.container}>
        {goods.map((good) => (
          <Card
            sx={{ maxWidth: 500 }}
            key={good.goodsName}
            className={styles.card}
          >
          
          
            <CardMedia
              sx={{ height: 350, width: 350 }}
              image={good.image}
              title={good.goodsName}
              className={styles.image}
            />
            <CardContent className={styles.text}>
              <Typography className={styles.goodsName}>
                {good.goodsName}
              </Typography>
              <Typography className={styles.price}>{good.price}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


<button onClick={() => toggleFavorites(good)}>
              {favorites.some((g) => g.id === good.id)
                ? "Remove from"
                : "Add to"}
              <CiStar className={styles.star} />
            </button>*/
