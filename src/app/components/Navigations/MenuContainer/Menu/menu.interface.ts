import { TypeMaterialIconName } from "@/shared/icons.types"

export interface IMenuItem {
    icon: TypeMaterialIconName
    title: string
    link: string
}

export interface IMenu{
    title: string
    items: IMenuItem[]
}