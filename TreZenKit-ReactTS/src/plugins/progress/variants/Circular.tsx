import { cn } from "@/lib/utils";
import type { ProgressProps } from "../interface";

const Circular = ({ children }: ProgressProps) => {
	return (
		<div className={cn("size-fit bg-amber-400 relative rounded-full")}>
			<svg viewBox="0 0 100 100" role="presentation">
				<circle className="bg-amber-500" r="47" cx="50" cy="50" stroke-linecap="round" stroke-width="6" />
			</svg>
			<span>{children}</span>
		</div>
	);
};

export default Circular;
