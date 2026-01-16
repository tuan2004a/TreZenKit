import type { BadgeNotifProps } from "../interfaces";

const roundedClasses = {
	xs: "rounded-xs",
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl",
	full: "rounded-full",
} as const;

function getPlacementClasses(rounded: BadgeNotifProps["rounded"] = "md"): string {
	return roundedClasses[rounded] || roundedClasses["md"];
}

export default getPlacementClasses;
