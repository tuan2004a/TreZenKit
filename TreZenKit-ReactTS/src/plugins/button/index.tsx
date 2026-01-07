import { forwardRef } from "react";
import type { ButtonProps } from "./interfaces";
import { BtnPrimary } from "./variants/index";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props) => {
	const { variant = "primary", onClick, disabled, className, size, children, rounded, ...restProps } = props;

	switch (variant) {
		case "primary":
			return (
				<BtnPrimary
					variant={variant}
					onClick={onClick}
					disabled={disabled}
					className={className}
					size={size}
					rounded={rounded}
					{...restProps}
				>
					{children}
				</BtnPrimary>
			);
		default:
			return <></>;
	}
});
Button.displayName = "Button";

export default Button