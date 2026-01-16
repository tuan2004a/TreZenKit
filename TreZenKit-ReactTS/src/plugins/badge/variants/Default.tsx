import { cn } from "@/lib/utils";
import type { BadgeDefaultProps } from "../interfaces";
import { Rounded } from "../shared";

const Default = ({ children, className = "bg-sky-100 text-blue-500", rounded }: BadgeDefaultProps) => {
	return <div className={cn("px-2 py-px rounded-full text-xs font-semibold leading-normal ", Rounded(rounded), className)}>{children}</div>;
};

export default Default;
