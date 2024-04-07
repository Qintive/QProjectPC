import { FC } from 'react'

import { IButton } from './form.interface'

const Button: FC<IButton> = ({ onClick, children, className, ...rest }) => {
	return (
		<button  {...rest}>
			{children}
		</button>
	)
}

export default Button
