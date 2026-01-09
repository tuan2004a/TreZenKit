// button/rounded.ts
import type { ButtonProps } from "../interfaces";

const roundedClasses = {
	xs: "rounded-xs",
	// Rounded xs: Góc bo rất nhẹ (0.125rem) – minimal UI, icon button

	sm: "rounded-sm",
	// Rounded sm: Góc bo nhẹ (0.25rem) – subtle, secondary button

	md: "rounded-md",
	// Rounded md: Góc bo chuẩn (0.375rem) – default button

	lg: "rounded-lg",
	// Rounded lg: Góc bo rõ (0.5rem) – primary CTA

	xl: "rounded-xl",
	// Rounded xl: Góc bo lớn (0.75rem) – pill shape, hero button

	"2xl": "rounded-2xl",
	// Rounded 2xl: Bo rất lớn (1rem) – card/CTA nổi bật

	"3xl": "rounded-3xl",
	// Rounded 3xl: Bo cực lớn (1.5rem) – ultra-soft / modern UI

	"4xl": "rounded-4xl",
	// Rounded-4xl: Bo cực lớn (2rem)  — massive button, showcase

	"5xl": "rounded-5xl",
	// Rounded-4xl: Bo cực lớn (2.5rem)  — ultra-large, hero / marketing

	full: "rounded-full",
	// Rounded full: Pill / circle – chip, pill button, avatar
} as const;

function getRoundedClasses(rounded: ButtonProps["rounded"] = "md"): string {
	return roundedClasses[rounded as keyof typeof roundedClasses] || roundedClasses.md;
}

export default getRoundedClasses;
