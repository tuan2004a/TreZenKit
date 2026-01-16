import type { BadgeCountProps } from "../interfaces";

const spacingClasses = {
	1: "py-px px-1 text-[5px]",
	2: "py-px px-1.5 text-[8px]",
	3: "py-px px-2 text-[11px]",
	4: "py-[1.25px] px-2.5 text-[14px]",
	5: "py-0.5 px-3 text-[17px]",
} as const;

function getSpacingClasses(rounded: BadgeCountProps["spacing"] = 3): string {
    return spacingClasses[rounded] || spacingClasses[3];
}

export default getSpacingClasses;
