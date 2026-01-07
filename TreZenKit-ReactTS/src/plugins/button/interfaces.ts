import type { ButtonHTMLAttributes, ReactNode } from "react";

type BtnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GradientShow = "top" | "right" | "bottom" | "left";
type variant = "primary";
type rounded = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
	size?: BtnSize;
	variant: variant;
	rounded?: rounded;
}

export interface ShowGradient extends ButtonProps {
	GradientShow?: GradientShow;
}
