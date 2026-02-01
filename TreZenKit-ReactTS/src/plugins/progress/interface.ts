//progress/interface.ts
import type { ReactNode } from "react";

type VariantType = "basic" | "circular";
type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

/**---- Basic Interface ----*/
export interface ProgressBaseProps {
	variant?: VariantType;
	value?: number;
	className?: string;
	children?: ReactNode;
	percent: number;
}

/**---- Base Progress ----*/
export interface BasicProgressProps extends ProgressBaseProps {
	variant?: "basic";
	height?: number;
	color?: string;
	trackColor?: string;
}

/**---- Circular Progress ----*/
export interface CircularProgressProps extends ProgressBaseProps {
	variant?: "circular";
	size?: SizeType;
	strokeWidth?: number;
	color?: string;
	trackColor?: string;
}

// ============================================
// Union Type for Progress Component
export type ProgressProps = ({ variant: "basic" } & BasicProgressProps) | ({ variant: "circular" } & CircularProgressProps);
