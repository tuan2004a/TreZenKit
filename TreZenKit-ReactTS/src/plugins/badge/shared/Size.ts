import type { BadgeCountProps } from "../interfaces";

const sizeClasses = {
    1: "size-2 text-[5px]",
    2: "size-3 text-[8px]",
    3: "size-4 text-[11px]",
    4: "size-5 text-[14px]",
    5: "size-6 text-[17px]",
} as const;

function getSizeClasses(rounded: BadgeCountProps["size"] = 3): string {
	return sizeClasses[rounded] || sizeClasses[3];
}

export default getSizeClasses;
