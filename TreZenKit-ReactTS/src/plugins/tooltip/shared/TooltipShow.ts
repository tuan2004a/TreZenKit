// tooltip/TooltipShow.ts
import type { TooltipProps } from "../interfaces";

const tooltipBase = [
	"relative",
	"after:content-[attr(data-tooltip)]",
	"after:text-base",
	"after:font-medium",
	"after:rounded-lg",
	"after:opacity-0",
	"after:absolute",
	"after:transition-all",
	"after:duration-300",
	"after:whitespace-nowrap",
	"after:bg-gray-600",
	"after:text-white",
	"after:py-1.5",
	"after:px-3.5",
	"after:pointer-events-none",
	"after:leading-normal",
	"before:absolute",
	"before:size-0",
	"before:border-8",
	"before:border-gray-600",
	"before:transition-all",
	"before:duration-300",
	"before:opacity-0",
	"before:pointer-events-none",
	"hover:before:opacity-100",
	"hover:after:opacity-100",
].join(" ");

const tooltipPlacementClass = {
	top: "after:-top-15 after:left-1/2 after:-translate-x-1/2 before:-top-6 before:left-1/2 before:-translate-x-1/2 before:border-r-transparent before:border-l-transparent before:border-b-transparent",
	bottom: "after:-bottom-15 after:left-1/2 after:-translate-x-1/2 before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:border-r-transparent before:border-l-transparent before:border-t-transparent",
	left: "after:top-1/2 after:-left-7 after:-translate-x-full after:-translate-y-1/2 before:top-1/2 before:-left-7.25 before:-translate-y-1/2 before:border-r-transparent before:border-t-transparent before:border-b-transparent",
	right: "after:-right-7 after:top-1/2 after:translate-x-full after:-translate-y-1/2 before:top-1/2 before:-right-7.25  before:-translate-y-1/2 before:border-l-transparent before:border-t-transparent before:border-b-transparent",
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
