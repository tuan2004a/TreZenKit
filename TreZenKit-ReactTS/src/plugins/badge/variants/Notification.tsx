import { cn } from "@/lib/utils";
import type { BadgeNotifProps } from "../interfaces";
import { Placement, Size } from "../shared/index";

const Notification = ({ className, placement = "tr", size = 3 }: BadgeNotifProps) => {
	return <div className={cn("absolute rounded-full ", Size(size), Placement(placement), className)}></div>;
};

export default Notification;
