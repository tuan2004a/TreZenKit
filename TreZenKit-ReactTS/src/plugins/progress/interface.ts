import type { ReactNode } from "react";

type variants = "basic" | "circular";

export interface ProgressProps {
	variant?: variants;
	children?: ReactNode;
	className?: string;
}

export interface ProgressBasicProps {}

// CircularProgress.types.ts
export interface CircularProgressProps {
	/** Giá trị tiến trình (0-100) */
	value?: number;
	/** Kích thước vòng tròn (px) */
	size?: number;
	/** Độ dày của stroke */
	strokeWidth?: number;
	/** Màu của progress */
	color?: string;
	/** Màu nền của track */
	trackColor?: string;
	/** Chế độ loading không xác định */
	indeterminate?: boolean;
	/** Hiển thị phần trăm */
	showValue?: boolean;
	/** Class tùy chỉnh */
	className?: string;
	/** Label tùy chỉnh */
	label?: React.ReactNode;
}
