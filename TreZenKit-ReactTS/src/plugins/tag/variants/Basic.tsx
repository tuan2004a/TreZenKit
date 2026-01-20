import { cn } from "@lib/utils";
import type { TagBasicProps } from "../interface";

const Basic = ({ children }: TagBasicProps) => {
	return <div className={cn("relative inline-flex items-center px-3 py-2 rounded-lg font-medium leading-normal whitespace-nowrap bg-black text-white cursor-pointer")}>{children}</div>;
};

export default Basic;
