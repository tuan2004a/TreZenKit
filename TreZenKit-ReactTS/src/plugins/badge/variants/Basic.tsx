import { cn } from "@/lib/utils";
import type { BadgeBasicProps } from "../interfaces";
import { Rounded } from "../shared";

const Basic = ({ children, className = "bg-sky-100 text-blue-500", rounded }: BadgeBasicProps) => {
	return <div className={cn("px-2 py-px rounded-full text-xs font-semibold leading-normal ", Rounded(rounded), className)}>{children}</div>;
};

export default Basic;
