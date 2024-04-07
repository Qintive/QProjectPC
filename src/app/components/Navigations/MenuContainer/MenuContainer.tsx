import React, {FC} from 'react'
import Menu from './Menu/Menu'
import { menus } from './Menu/menu.data'
import style from './MenuContainer.module.scss'

const MenuContainer: FC = () => {
  return (
    <div >
        <Menu menu={menus[0]}/>
    </div>
  )
}

export default MenuContainer