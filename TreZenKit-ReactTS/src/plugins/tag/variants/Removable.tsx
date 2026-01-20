import { cn } from "@lib/utils";
import type { TagBasicProps } from "../interface";

const Removable = ({ children }: TagBasicProps) => {
	return (
		<div className={cn("flex-center bg-slate-200 text-sm rounded-[5px]")}>
			<span className="pl-2 mr-1 whitespace-nowrap leading-normal">{children}</span>
			<button className="rounded-inherit flex-center cursor-pointer h-full px-1 text-base hover:bg-red-200 hover:text-red-500">
				<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
					<path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
				</svg>
			</button>
		</div>
	);
};

export default Removable;
