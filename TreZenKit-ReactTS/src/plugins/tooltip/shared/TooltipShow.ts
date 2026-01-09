// tooltip/TooltipShow.ts
import type { TooltipProps } from "../interfaces";

const tooltipBase = [
	"relative",
	"after:content-[attr(data-tooltip)]",
	"after:font-medium",
	"after:rounded-lg",
	"after:opacity-0",
	"after:absolute",
	"after:transition-all",
	"after:duration-300",
	"after:whitespace-nowrap",
	"after:bg-gray-700",
	"after:text-white",
	"after:py-1",
	"after:px-3.5",
	"after:pointer-events-none",
	"after:leading-normal",
	"before:absolute",
	"before:w-0",
	"before:h-0",
	"before:border-8",
	"before:border-gray-700",
	"before:transition-all",
	"before:duration-300",
	"before:opacity-0",
	"before:pointer-events-none",
	"hover:before:opacity-100",
	"hover:after:opacity-100",
].join(" ");

const tooltipPlacementClass = {
	top: "after:-top-13 after:left-1/2 after:-translate-x-1/2 before:-top-5 before:left-1/2 before:-translate-x-1/2 before:border-r-transparent before:border-l-transparent before:border-b-transparent",
	bottom: "after:top-full after:mt-2 after:left-1/2 after:-translate-x-1/2 before:top-full before:mt-1 before:left-1/2 before:-translate-x-1/2 before:rotate-180",
	left: "after:left-0 after:-translate-x-full after:-top-1/2 after:-translate-y-1/2 before:left-0 before:-translate-x-1/2 before:-top-1/2 before:-translate-y-1/2 before:-rotate-90",
	right: "after:right-0 after:translate-x-full after:-top-1/2 after:-translate-y-1/2 before:right-0 before:translate-x-1/2 before:-top-1/2 before:-translate-y-1/2 before:rotate-90",
};

export const tooltipTop = `${tooltipBase} ${tooltipPlacementClass.top}`;
export const tooltipBottom = `${tooltipBase} ${tooltipPlacementClass.bottom}`;
export const tooltipLeft = `${tooltipBase} ${tooltipPlacementClass.left}`;
export const tooltipRight = `${tooltipBase} ${tooltipPlacementClass.right}`;

function getTooltipClasses(tooltip: TooltipProps["ShowTooltip"] = "top"): string {
	const placementClass = tooltipPlacementClass[tooltip as keyof typeof tooltipPlacementClass] || tooltipPlacementClass.top;

	return `${tooltipBase} ${placementClass}`;
}

export default getTooltipClasses;
