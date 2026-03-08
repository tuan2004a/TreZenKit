import { cn } from "@lib/utils";
import type { groupBtnBasicProps } from "./interface";
import { Rounded, Size } from "./shared/index";

const GroupBtn = ({ items = [], className, rounded, size, ...restProps }: groupBtnBasicProps) => {
	return (
		<div className={cn("flex rounded-xl border border-blue-500 outline-0 ring-0 divide-blue-700 divide-x overflow-hidden", Rounded(rounded), Size(size), className)} {...restProps}>
			{items.map(({ title, classBtn, ...itemProps }, index: number) => (
				<button key={index} className={cn("cursor-pointer", classBtn)} {...itemProps}>
					{title}
				</button>
			))}
		</div>
	);
};

export default GroupBtn;
