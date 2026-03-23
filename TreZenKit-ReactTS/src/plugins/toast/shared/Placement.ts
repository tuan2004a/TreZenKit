import type { BasicProps } from "../interface";

const placementClasses = {
	tr: "tr",
	tl: "tl",
	br: "br",
	bl: "bl",
} as const;

function getPlacementClasses(placement: BasicProps["placement"] = "tr"): string {
	return placementClasses[placement as keyof typeof placementClasses] || placementClasses["tr"];
}

export default getPlacementClasses;
