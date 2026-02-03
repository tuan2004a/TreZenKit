import type React from "react";

type variantType = "text" | "number" | "password";
type sizeType = "xs" | "sm" | "md" | "lg" | "xl";

/**---- Basic Interface ----*/
export interface InputBasicProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	variant: variantType;
	size?: sizeType;
	className?: string;
}

export interface InputTextProps extends InputBasicProps {
	variant: "text";
}

export type InputProps = ({ variant: "text" } & InputTextProps) | ({ variant: "number" } & InputTextProps);