import type React from "react";

type Variant = "text" | "number" | "password";
type sizeType = "xs" | "sm" | "md" | "lg" | "xl";

/**---- Basic Interface ----*/
export interface InputBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	size?: sizeType;
	className?: string;
}

export type InputTextProps = InputBaseProps;

export type InputNumberProps = InputBaseProps;

export type InputPasswordProps = InputBaseProps;

export type InputProps =
	| (InputBaseProps & { variant: Extract<Variant, "text"> })
	| (InputBaseProps & { variant: Extract<Variant, "number"> })
	| (InputPasswordProps & { variant: Extract<Variant, "password"> });