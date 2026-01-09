import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { ShowGradientProps } from "../interfaces";
import { Size, Rounded, GradientShow } from "../shared/index";

const Primary = forwardRef<HTMLButtonElement, ShowGradientProps>(({ShowGradient = "none", onClick, disabled, className, size, children, rounded, ...restProps }, ref) => {
	return (
		<button ref={ref} type="button" onClick={onClick} disabled={disabled} className={cn("bg-[#1c8efa] cursor-pointer text-white relative inline-flex items-center justify-center whitespace-nowrap text-nowrap transition-all duration-300",GradientShow(ShowGradient), Size(size), Rounded(rounded), className)} {...restProps}>
			{children}
		</button>
	);
});

Primary.displayName = "Primary";

export default Primary;
