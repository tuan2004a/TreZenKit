import { forwardRef } from "react";
import type { ShowGradientProps } from "./interfaces";
import { BtnPrimary, OutlineGradient } from "./variants/index";

const Button = forwardRef<HTMLButtonElement, ShowGradientProps>((props, ref) => {
	const { variant , ShowGradient, onClick, disabled, className, size, children, rounded, ...restProps } = props;

	switch (variant) {
		case "Primary":
			return (
				<BtnPrimary ref={ref} variant={variant} ShowGradient={ShowGradient} onClick={onClick} disabled={disabled} className={className} size={size} rounded={rounded} {...restProps}>
					{children}
				</BtnPrimary>
			);
		case "OutlineGradient":
			return (
				<OutlineGradient ref={ref} variant={variant} ShowGradient={ShowGradient} onClick={onClick} disabled={disabled} className={className} size={size} rounded={rounded} {...restProps}>
					{children}
				</OutlineGradient>
			);
		default:
			throw new Error(`Unsupported variant: ${variant}`);
	}
});
Button.displayName = "Button";

export default Button;
