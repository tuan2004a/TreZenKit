import { cn } from "@/lib/utils";
import type { BadgeStatusProps } from "../interfaces";
import { Size } from "../shared";

const Status = ({ children, classDot = "bg-slate-900", className = "text-slate-900 bg-slate-100", size }: BadgeStatusProps) => {
	return (
		<div className={cn("flex items-center gap-1.5 rounded-full font-semibold border leading-normal", Size.count(size), className)}>
			<span className={cn("size-1 rounded-full", classDot)} />
			{children}
		</div>
	);
};

export default Status;
