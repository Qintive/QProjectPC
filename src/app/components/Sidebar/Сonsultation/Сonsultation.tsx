import styles from "./Сonsultation.module.scss";
import { Typography, Input } from "@mui/material";
import * as React from "react";

const Сonsultation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.absolute}>
        <div className={styles.consultation}>
          <img src="/images/Сonsultation/point.svg" alt="point" />
          <Typography className={styles.text}>
            Требуется консультация?
          </Typography>
        </div>
        <div className={styles.form}>
          <Input
            placeholder="Введите номер телефона"
            className={styles.input}
          />
          <button className={styles.button}>
            <div className={styles.text_button}>Отправить</div>
          </button>
        </div>
      </div>
      <div>
        <img
          src="/images/Сonsultation/consultation.png"
          width={450}
          height={460}
          className={styles.img}
          />
      </div>
    </div>
  );
};

export default Сonsultation;
