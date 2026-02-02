// CircularGap.tsx
import { cn } from "@/lib/utils";
import type { CircularGapProgressProps } from "../interface";

const CircularGap = ({ percent = 0, className, placement = 0, gapAngle = 30 }: CircularGapProgressProps) => {
	// Sử dụng radius = 16 để khớp với SVG viewBox (0 0 36 36)
	const radius = 16;
	const circumference = 2 * Math.PI * radius;

	// Tính toán gap
	const normalizedPlacement = placement % 360;
	const gapLength = (gapAngle / 360) * circumference;
	const availableLength = circumference - gapLength;

	// ✅ Sửa: dùng percent
	const progressLength = (percent / 100) * availableLength;

	// Rotation để đặt gap đúng vị trí
	const rotation = normalizedPlacement - 90 - gapAngle / 2;

	return (
		<div className={cn("relative inline-flex items-center justify-center size-20 transition-all duration-200", className)}>
			<svg viewBox="0 0 36 36" className="w-full h-full" style={{ transform: `rotate(${rotation}deg)` }}>
				{/* Track */}
				<circle cx="18" cy="18" r={radius} fill="none" className="stroke-gray-200" strokeWidth="3" strokeLinecap="round" strokeDasharray={`${availableLength} ${gapLength}`} />
				{/* Progress */}
				<circle cx="18" cy="18" r={radius} fill="none" className="stroke-blue-500" strokeWidth="3" strokeLinecap="round" strokeDasharray={`${progressLength} ${circumference}`} style={{ transition: "stroke-dasharray 0.3s ease" }} />
			</svg>
			<span className="absolute text-sm font-medium">{percent}%</span>
		</div>
	);
};

export default CircularGap;
