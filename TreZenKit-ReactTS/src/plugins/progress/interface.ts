//progress/interface.ts
import type { ReactNode } from "react";

type VariantType = "basic" | "circular" | "circularGap";
type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

/**---- Basic Interface ----*/
export interface ProgressBaseProps {
	variant?: VariantType;
	value?: number;
	className?: string;
	children?: ReactNode;
	percent: number;
	color?: string;
	trackColor?: string;
}

/**---- Base Progress ----*/
export interface BasicProgressProps extends ProgressBaseProps {
	variant?: "basic";
	height?: number;
}

/**---- Circular Progress ----*/
export interface CircularProgressProps extends ProgressBaseProps {
	variant?: "circular";
	size?: SizeType;
	strokeWidth?: number;
	placement?: number;
}

/**---- Circular gap Progress ----*/
export interface CircularGapProgressProps extends Omit<CircularProgressProps, "variant"> {
	variant?: "circularGap";
	gapAngle: number;
}

// ============================================
// Union Type for Progress Component
export type ProgressProps = ({ variant: "basic" } & BasicProgressProps) | ({ variant: "circular" } & CircularProgressProps) | ({ variant: "circularGap" } & CircularGapProgressProps);
