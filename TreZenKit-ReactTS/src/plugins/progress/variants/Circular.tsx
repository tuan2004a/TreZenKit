// Circular.tsx
import { cn } from "@/lib/utils";
import type { CircularProgressProps } from "../interface";

const Circular = ({ percent = 0, className, placement = 0 }: CircularProgressProps) => {
	const rotation = placement - 90 ;

	return (
		<div className={cn("relative inline-flex items-center justify-center size-20 transition-all duration-200", className)}>
			<svg viewBox="0 0 36 36" className={cn("")} style={{ transform: `rotate(${rotation}deg)` }}>
				{/* Track */}
				<circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200" strokeWidth="3" />
				{/* Progress */}
				<circle cx="18" cy="18" r="16" fill="none" className="stroke-blue-500" strokeWidth="3" strokeLinecap="round" strokeDasharray="100" strokeDashoffset={100 - percent} style={{transition: "stroke-dashoffset 0.3s, stroke-dasharray 0.3s"}}/>
			</svg>
			<span className="absolute text-sm font-medium">{percent}%</span>
		</div>
	);
};

export default Circular;
