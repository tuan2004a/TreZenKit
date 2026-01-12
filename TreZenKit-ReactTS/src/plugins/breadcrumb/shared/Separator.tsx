import React from "react";
import type { BreadcrumbProps } from "../interfaces";

const separators = {
	chevron: (
		<svg className="size-3.5 mt-0.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
			<path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="m184 112 144 144-144 144"></path>
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
	wave: (
		<svg className="mt-0.5" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
			<path d="M225.35,133.1c-15.22,18.93-30.43,29-46.5,30.65A46.71,46.71,0,0,1,174,164c-20.81,0-38.16-14.13-53.59-26.7-14.24-11.6-27.68-22.54-40.75-21.18-9.26,1-19.46,8.32-30.32,21.82a12,12,0,0,1-18.7-15C45.87,104,61.08,94,77.15,92.25c23-2.42,41.82,12.92,58.43,26.45,14.24,11.6,27.68,22.54,40.75,21.18,9.26-1,19.46-8.32,30.32-21.82a12,12,0,1,1,18.7,15Z"></path>
		</svg>
	)
} as const;

function getSeparator(separator: BreadcrumbProps["separator"] = "chevron"): React.ReactElement {
	return separators[separator] || separators["chevron"];
}

export default getSeparator;
