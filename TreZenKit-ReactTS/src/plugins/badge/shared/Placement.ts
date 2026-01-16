import type { BadgeNotifProps } from "../interfaces";

const placementClasses = {
	tr: "top-0 right-0 -translate-y-1/2 translate-x-1/2",
	tl: "top-0 left-0 translate-y-1/2 translate-x-1/2",
	br: "bottom-0 right-0 -translate-y-1/2 -translate-x-1/2",
	bl: "bottom-0 left-0 -translate-y-1/2 translate-x-1/2",
} as const;

function getPlacementClasses(placement: BadgeNotifProps["placement"] = "tr"): string {
	return placementClasses[placement] || placementClasses["tr"];
}

export default getPlacementClasses;
