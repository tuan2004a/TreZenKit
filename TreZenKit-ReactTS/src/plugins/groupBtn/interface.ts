import type React from "react";
import type { ReactNode } from "react";

type rounded = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
type BtnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
// type variant = "Basic" | "OutlineGradient";

export interface GroupBtnItem
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
	title: ReactNode;
	classBtn?: string;
}

export interface BasicProps {
	children?: ReactNode;
	className?: string;
	size?: BtnSize;
	rounded?: rounded;
	items?: GroupBtnItem[];
}

export interface groupBtnBasicProps extends BasicProps {
	variant?: "basic";
}

export type GroupBtnProps = { variant: "basic" } & groupBtnBasicProps;
