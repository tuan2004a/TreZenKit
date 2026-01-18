import type { DividerBasicProps } from "../interface";

const placementClasses = {
	start: "after:top-1/2 after:left-1/12 after:-translate-y-1/2",
	default: "after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 ",
	end: "after:top-1/2 after:right-1/12 after:-translate-y-1/2",
} as const;

function getPlacementClasses(placement: DividerBasicProps["placement"] = "default"): string {
	return placementClasses[placement] || placementClasses["default"];
}

export default getPlacementClasses;
