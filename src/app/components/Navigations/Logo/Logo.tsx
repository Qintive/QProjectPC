import { Typography } from "@mui/material";
import style from "./Logo.module.scss";
import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Link href="/" legacyBehavior >
      <a className={style.logo}>
        <Typography>
          <div className={style.orange_text}>
            Q
            <span className={style.white_text}>Project</span>
            PC
            </div>
        </Typography>
      </a>
      
    </Link>
  );
};
export default Logo;
