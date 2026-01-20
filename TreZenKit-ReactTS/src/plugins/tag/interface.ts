import type { ReactNode } from "react";

type variants = "basic" | "removable";
export type Size = 1 | 2 | 3;

export interface TagBasicProps {
	children: ReactNode;
	variants?: variants;
	size?: Size;
}
