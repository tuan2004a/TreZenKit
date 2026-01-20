import { cn } from "@lib/utils";
import type { TagBasicProps } from "../interface";

const Removable = ({ children }: TagBasicProps) => {
	return (
		<div className={cn("flex items-center gap-x-2 whitespace-nowrap leading-normal bg-amber-300 px-3")}>
			{children}
			<button>
				X
			</button>
		</div>
	);
};

export default Removable;
