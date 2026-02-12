import { cn } from "@/lib/utils";
import type { InputPasswordProps } from "../interface";

const Password = ({ className, placeholder, ...restProps }: InputPasswordProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { size, ...inputProps } = restProps;

	return <input type="password" className={cn("outline-none border border-gray-400 cursor-text h-10 text-base px-4 rounded-lg w-full focus:border-blue-500", className)} placeholder={placeholder} {...inputProps} />;
};

export default Password;
