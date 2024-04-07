import { IMenu } from "./menu.interface"

const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Главная',
		},
		{
			icon: 'MdList',
			link: '/catalog',
			title: 'Каталог',
		},
		{
			icon: 'MdPermContactCalendar',
			link: '/contact',
			title: 'Контакты',
		},
		{
			icon: 'MdReportGmailerrorred',
			link: '/aboutUs',
			title: 'О нас',
		},
	],
}


export const menus: IMenu[] = [firstMenu]
