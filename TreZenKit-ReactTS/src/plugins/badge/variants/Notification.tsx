import { cn } from "@/lib/utils";
import type { BadgeNotifProps } from "../interfaces";
import { Placement, Size } from "../shared/index";

const Notification = ({ className, placement = "tr", size = 2 }: BadgeNotifProps) => {
	return <div className={cn("absolute rounded-full ", Size.notif(size), Placement(placement), className)}/>;
};

export default Notification;
