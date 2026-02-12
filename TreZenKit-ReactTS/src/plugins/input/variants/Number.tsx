import { cn } from "@/lib/utils";
import type { InputNumberProps } from "../interface";
import "../style.css";

const Number = ({ className, placeholder, ...restProps }: InputNumberProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { size, ...inputProps } = restProps;

	return <input type="number" className={cn("outline-none border border-gray-400 cursor-text h-10 text-base px-4 rounded-lg w-full focus:border-blue-500", className)} placeholder={placeholder} {...inputProps} />;
};

export default Number;
