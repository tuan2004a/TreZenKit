import type { Size } from "../interface";

const sizeClasses = {
	1: "",
	2: "",
	3: "",
} as const;

const getSizeClasses = (size: Size = 2): string => {
	return sizeClasses[size] || sizeClasses[2];
};

export default getSizeClasses;
