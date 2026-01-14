// avatar/size.ts
import type { AvatarProps } from "../interfaces";

const sizeClasses = {
	xs: "size-6",
	sm: "size-8",
	md: "size-10",
	lg: "size-20",
	xl: "size-36",
} as const;

function getSizeClasses(size: AvatarProps["size"] = "md"): string {
	return sizeClasses[size] || sizeClasses["md"];
}

export default getSizeClasses;
