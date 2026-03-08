import type { BasicProps } from "../interface";

const sizeClasses = {
	5: "*:px-5 *:py-2",

} as const;

function getGroupBtnSizeClasses(size: BasicProps["size"] = 5): string {
	return sizeClasses[size as keyof typeof sizeClasses] || sizeClasses[5];
}

export default getGroupBtnSizeClasses;
