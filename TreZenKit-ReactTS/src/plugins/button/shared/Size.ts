// button/size.ts
import type { ButtonProps } from "../interfaces";

const sizeClasses = {
	// Size 1: Rất nhỏ – icon button, action phụ, dùng trong table
	1: "px-2 py-1 text-[9px]",

	// Size 2: Nhỏ – button phụ, compact UI
	2: "px-3.5 py-1.5 text-xs",

	// Size 3: Small – form nhỏ, sidebar
	3: "px-4 py-2 text-sm",

	// Size 4: Small–Medium – dùng nhiều trong dashboard
	4: "px-5 py-2.5 text-sm",

	// Size 5: Default – button chuẩn (primary)
	5: "px-6 py-3 text-base",

	// Size 6: Medium–Large – CTA vừa
	6: "px-7 py-3.5 text-base",

	// Size 7: Large – CTA chính
	7: "px-8 py-4 text-lg",

	// Size 8: Extra Large – hero section
	8: "px-10 py-5 text-lg",

	// Size 9: Very Large – landing page
	9: "px-12 py-6 text-xl",

	// Size 10: Huge – button showcase / marketing
	10: "px-14 py-7 text-2xl",
} as const;

function getSizeClasses(size: ButtonProps["size"] = 5): string {
	return sizeClasses[size] || sizeClasses[5];
}

export default getSizeClasses;
