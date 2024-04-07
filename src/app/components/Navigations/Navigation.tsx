import React, {FC} from 'react'
import Logo from './Logo/Logo'
import styles from './Navigation.module.scss'
import MenuContainer from './MenuContainer/MenuContainer'
import Basket from './Basket/Basket'


const Navigation: FC = () => {
  return (
    <div className={styles.header}>
        <Logo/>
        <MenuContainer/>
        <Basket/>
    </div>
  )
}

export default Navigation