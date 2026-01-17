import { cn } from "@/lib/utils";
import type { BadgeCountProps } from "../interfaces";
import { Placement, Size } from "../shared/index";

const Count = ({ className, placement = "tr", total, size }: BadgeCountProps) => {
	return <div className={cn("absolute rounded-full flex-center leading-normal font-medium", Size.count(size), Placement(placement), className)}>{total}</div>;
};

export default Count;
