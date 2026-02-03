import { cn } from "@/lib/utils";
import type { InputTextProps } from "../interface";

const Number = ({ className, placeholder }: InputTextProps) => {
	return <input type="number" className={cn("", className)} placeholder={placeholder} />;
};

export default Number;
