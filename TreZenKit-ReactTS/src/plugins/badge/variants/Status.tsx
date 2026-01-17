import { cn } from "@/lib/utils";
import type { BadgeStatusProps } from "../interfaces";
import { Size } from "../shared";

const Status = ({ children, classDot, className = "text-green-500 bg-green-100 *:bg-green-500", size }: BadgeStatusProps) => {
	return (
		<div className={cn("flex items-center rounded-full font-medium border", Size.status(size), className)}>
			<span className={cn("size- rounded-full", classDot)} />
			{children}
		</div>
	);
};

export default Status;
