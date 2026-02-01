// prgress/size.ts
import type { CircularProgressProps } from "../interface";

const sizeClasses = {
    xs: "size-6",
    sm: "size-8",
    md: "size-10",
    lg: "size-20",
    xl: "size-36",
} as const;

function getSizeClasses(size: CircularProgressProps["size"] = "md"): string {
	return sizeClasses[size] || sizeClasses["md"];
}

export default getSizeClasses;
