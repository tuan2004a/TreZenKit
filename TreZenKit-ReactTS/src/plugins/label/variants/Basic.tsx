import { cn } from "@/lib/utils";
import type { LabelProps } from "../interface";

const Basic = ({ children, className, title }: LabelProps) => {
	return (
		<div className={cn("", className)}>
			<label className={cn("")}>{title}</label>
			<span>
				{children}
			</span>
		</div>
	);
};

export default Basic;
