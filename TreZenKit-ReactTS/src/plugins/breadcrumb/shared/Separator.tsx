import React from "react";
import type { BreadcrumbProps } from "../interfaces";

const separators = {
	arrow: (
		<svg className="size-3.5 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
			<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
		</svg>
	),
	slash: (
		<svg className="text-xl mt-0.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M12.528 3.047a.75.75 0 0 1 .449.961L8.433 16.504a.75.75 0 1 1-1.41-.512l4.544-12.496a.75.75 0 0 1 .961-.449Z" clip-rule="evenodd"></path>
		</svg>
	),
	bullet: (
		<svg className="text-[10px] mt-0.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
		</svg>
	),
	wave:(
		<></>
	),
	chevron:(
		<></>
	)
} as const;

function getSeparator(separator: BreadcrumbProps["separator"] = "arrow"): React.ReactElement {
	return separators[separator] || separators["arrow"];
}

export default getSeparator;
