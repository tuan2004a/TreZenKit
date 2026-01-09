import type { ButtonHTMLAttributes, ReactNode } from "react";

type BtnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GradientShow = "t" | "tr"| "tl" | "b" | "br"| "bl" | "r"| "l" | "none";
type variant = "Primary" | "OutlineGradient";
type rounded = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
	size?: BtnSize;
	variant: variant;
	rounded?: rounded;
}

export interface ShowGradientProps extends ButtonProps {
	ShowGradient?: GradientShow;
}
