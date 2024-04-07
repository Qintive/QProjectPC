import { TypeMaterialIconName } from '@/shared/icons.types'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {

	const IconComponent = MaterialIcons[name]

	if (IconComponent)
		return <IconComponent /> || <MaterialIcons.MdDragIndicator />
	else return null
}
    