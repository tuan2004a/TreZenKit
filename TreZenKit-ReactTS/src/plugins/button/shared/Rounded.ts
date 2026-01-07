// button/rounded.ts
import type { ButtonProps } from "../interfaces";

const roundedClasses = {
	xs: "rounded-sm",
	// Rounded xs: Góc bo rất nhẹ (0.125rem) – minimal UI, icon button

	sm: "rounded",
	// Rounded sm: Góc bo nhẹ (0.25rem) – subtle, secondary button

	md: "rounded-md",
	// Rounded md: Góc bo chuẩn (0.375rem) – default button

	lg: "rounded-lg",
	// Rounded lg: Góc bo rõ (0.5rem) – primary CTA

	xl: "rounded-xl",
	// Rounded xl: Góc bo lớn (0.75rem) – pill shape, hero button
} as const;

function getRoundedClasses(rounded: ButtonProps["rounded"] = "md"): string {
	return roundedClasses[rounded as keyof typeof roundedClasses] || roundedClasses.md;
}

export default getRoundedClasses;
