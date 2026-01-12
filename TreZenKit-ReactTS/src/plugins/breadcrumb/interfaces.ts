import type { ReactNode } from "react";

type SeparatorProps = "chevron" | "slash" | "bullet" | "wave";

export interface BreadcrumbProps {
	items: {
		title: ReactNode;
		href?: string;
	}[];
	separator?: SeparatorProps;
	className?: string;
}
