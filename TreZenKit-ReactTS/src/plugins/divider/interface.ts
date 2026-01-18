import type { ReactNode } from "react";

type placement = "start" | "default" | "end";

export interface DividerBasicProps {
	placement?: placement;
	className?: string;
	children: ReactNode
}
