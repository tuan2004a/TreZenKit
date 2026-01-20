// avatar/rounded.ts
import type { AvatarBasicProps } from "../interfaces";

const roundedClasses = {
	none: "rounded-none",
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl",
	full: "rounded-full",
} as const;

function getRoundedClasses(rounded: AvatarBasicProps["rounded"] = "md"): string {
	return roundedClasses[rounded] || roundedClasses["md"];
}

export default getRoundedClasses;
