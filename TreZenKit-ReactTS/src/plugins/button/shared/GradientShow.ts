// button/gradientShow.ts
import type { ShowGradientProps } from "../interfaces";

const gradientClasses = {
	t: "bg-linear-to-t",
	tr: "bg-linear-to-tr",
	tl: "bg-linear-to-tl",
	b: "bg-linear-to-b",
	br: "bg-linear-to-br",
	bl: "bg-linear-to-bl",
	r: "bg-linear-to-r",
	l: "bg-linear-to-l",
	none: "bg-none"
} as const;

function getGradientClasses(gradient: ShowGradientProps["ShowGradient"] = "tr"): string {
	return gradientClasses[gradient as keyof typeof gradientClasses] || gradientClasses.tr;
}

export default getGradientClasses;