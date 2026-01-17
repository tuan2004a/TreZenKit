import type { Size } from "../interfaces";

const sizeClasses = {
	notif: {
		1: "size-2 text-[5px]",
		2: "size-3 text-[8px]",
		3: "size-4 text-[11px]",
		4: "size-5 text-[14px]",
		5: "size-6 text-[17px]",
	},
	count: {
		1: "py-px px-1 text-[5px]",
		2: "py-px px-1.5 text-[8px]",
		3: "py-px px-2 text-[11px]",
		4: "py-[1.25px] px-2.5 text-[14px]",
		5: "py-0.5 px-3 text-[17px]",
	}
} as const;

export const getSizeClasses = {
	count(size: Size = 3): string {
		return sizeClasses.count[size] || sizeClasses.count[3];
	},
	notif(size: Size = 3): string {
		return sizeClasses.notif[size] || sizeClasses.notif[3];
	},
};

export default getSizeClasses;
