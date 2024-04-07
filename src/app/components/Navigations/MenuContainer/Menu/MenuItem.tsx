import React, { FC } from 'react'
import { IMenuItem } from './menu.interface'
import Link from 'next/link'
import { MaterialIcon } from './MaterialIcon'
import style from './MenuItem.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {

	return (
		<li className={style.li}>
			<Link href={item.link} legacyBehavior>
				<a className={style.icon}>
					<MaterialIcon name={item.icon} />
				</a>
			</Link>
		</li>
	)
}

export default MenuItem