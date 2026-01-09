import { forwardRef } from "react";
import { GradientShow, Size, Rounded } from "../shared/index";
import type { ShowGradientProps } from "../interfaces";
import { cn } from "@/lib/utils";

const OutlineGradient = forwardRef<HTMLButtonElement, ShowGradientProps>(({ ShowGradient, onClick, disabled, className = "text-black ", size, children, rounded, ...restProps }, ref) => {
	return (
		<button ref={ref} type="button" onClick={onClick} disabled={disabled} className={cn("relative group inline-flex items-center justify-center cursor-pointer p-0.5 whitespace-nowrap text-nowrap transition-all duration-300 hover:text-white from-cyan-500 to-blue-500", GradientShow(ShowGradient), Rounded(rounded), className)} {...restProps}>
			<span className={`bg-white px-4 py-2 rounded-inherit group-hover:bg-transparent ${Size(size)}`}>{children}</span>
		</button>
	);
});

OutlineGradient.displayName = "OutlineGradient";

export default OutlineGradient;
