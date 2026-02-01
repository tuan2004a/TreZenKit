// Circular.tsx
import { cn } from "@/lib/utils";
import type { CircularProgressProps } from "../interface";

const Circular = ({ percent = 0, className }: CircularProgressProps) => {
	return (
		<div className={cn("relative inline-flex items-center justify-center size-20", className)}>
			<svg viewBox="0 0 36 36" className={cn("-rotate-90")}>
				{/* Track */}
				<circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200" strokeWidth="3" />
				{/* Progress */}
				<circle cx="18" cy="18" r="16" fill="none" className="stroke-blue-500 transition-all duration-300" strokeWidth="3" strokeLinecap="round" strokeDasharray="100" strokeDashoffset={100 - percent} />
			</svg>
			<span className="absolute text-sm font-medium">{percent}%</span>
		</div>
	);
};

export default Circular;
