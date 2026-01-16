import { cn } from "@/lib/utils";
import type { BadgeCountProps } from "../interfaces";
import { Placement, Spacing } from "../shared/index";

const Count = ({ className, placement = "tr", total, spacing = 3 }: BadgeCountProps) => {
	return <div className={cn("absolute rounded-full flex-center leading-normal font-medium", Spacing(spacing), Placement(placement), className)}>{total}</div>;
};

export default Count;
