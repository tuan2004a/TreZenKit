import { cn } from "@/lib/utils";
import type { InputTextProps } from "../interface";

const Text = ({ className, size, ...restProps }: InputTextProps) => {
	return <input type="text" className={cn("outline-none border border-gray-400 cursor-text h-10 text-base px-4 rounded-lg w-full focus:border-blue-500", className)} {...restProps} />;
};

export default Text;
