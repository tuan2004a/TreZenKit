import { cn } from "@/lib/utils";
import type { BasicProgressProps } from "../interface";

const Basic = ({ percent, className }: BasicProgressProps) => {
	return (
		<div className={cn("relative w-full h-2.5 bg-slate-300 rounded-full overflow-hidden", className)}>
			<div className="h-full bg-blue-500 text-center text-[10px] flex-center font-medium text-white rounded-inherit" style={{ width: `${percent}%` }}>
				{percent}%
			</div>
		</div>
	);
};

export default Basic;
