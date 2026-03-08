import type React from "react";

type AvartSize = "xs" | "sm" | "md" | "lg" | "xl";
type rounded = "sm" | "md" | "lg" | "xl" | "full";

export interface AvatarBasicProps
	extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
	src?: string;
	className?: string;
	rounded?: rounded;
	size?: AvartSize;
}

export interface AvatarCountProps extends AvatarBasicProps {
	total?: number;
}