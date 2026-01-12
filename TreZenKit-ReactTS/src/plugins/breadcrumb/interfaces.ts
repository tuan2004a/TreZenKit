import type { ReactNode } from "react";

type SeparatorProps = "arrow" | "slash" | "bullet" | "wave" | "chevron";

export interface BreadcrumbItem {
	title: ReactNode;
}

export interface BreadcrumbProps {
	items: BreadcrumbItem[];
	title?: ReactNode;
	harf?: string
	separator?: SeparatorProps;
	className?: string;
}
