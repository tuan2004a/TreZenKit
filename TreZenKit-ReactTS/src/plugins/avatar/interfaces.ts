// type srcDefault = "string" | "https://i.pravatar.cc/";

type AvartSize = "xs" | "sm" | "md" | "lg" | "xl";
type rounded = "sm" | "md" | "lg" | "xl" | "full";

export interface AvatarProps {
	src?: string;
	className?: string;
	rounded?: rounded;
	alt?: string;
	size?: AvartSize;
}
