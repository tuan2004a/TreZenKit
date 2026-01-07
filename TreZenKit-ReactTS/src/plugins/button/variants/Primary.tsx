import { cn } from "@/lib/utils";
import type { ButtonProps } from "../interfaces";
import { Size, Rounded } from "../shared/index";

const Primary = ({ onClick, disabled, className, size, children, rounded, ...restProps }: ButtonProps) => {
	return (
		<button type="button" onClick={onClick} disabled={disabled} className={cn("bg-[#1c8efa] text-white relative inline-flex items-center justify-center whitespace-nowrap text-nowrap transition-all", Size(size), Rounded(rounded), className, restProps)}>
			{children}
		</button>
	);
};

export default Primary;
