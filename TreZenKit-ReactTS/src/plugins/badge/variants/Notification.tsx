import { cn } from "@/lib/utils";
import type { BadgeNotifProps } from "../interfaces";
import { Placement } from "../shared/index";

const Notification = ({ className, placement = "tr" }: BadgeNotifProps) => {
	return <div className={cn("absolute rounded-full", Placement(placement), className)}></div>;
};

export default Notification;
