import { cn } from "@/lib/utils";
import type { DividerBasicProps } from "../interface";
import { Placement } from "../shared";
import "../style.css";

const Basic = ({ placement, className, children }: DividerBasicProps) => {
	return <div data-divider={children} className={cn("relative w-full h-px rounded-xs bg-slate-300 after:content-[attr(data-divider)] after:absolute after:bg-white after:px-5 after:py-px after:text-sm after:leading-none", Placement(placement), className)} />;
};

export default Basic;
