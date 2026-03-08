import type { ReactNode } from "react";

/**---- Basic Interface ----*/
export interface LabelProps {
	title?: string;
	className?: string;
	children: ReactNode;
}
