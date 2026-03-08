import type { BasicProps } from "../interface";

const roundedClasses = {
	xs: "rounded-xs",
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl",
	full: "rounded-full",
} as const;

function getGroupBtnRoundedClasses(rounded: BasicProps["rounded"] = "md"): string {
	return roundedClasses[rounded as keyof typeof roundedClasses] || roundedClasses.md;
}

export default getGroupBtnRoundedClasses;
