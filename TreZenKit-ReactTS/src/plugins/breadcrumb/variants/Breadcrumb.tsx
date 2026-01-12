import React from "react";
import type { BreadcrumbProps, BreadcrumbItem } from "../interfaces";
import { Separator } from "../shared/index";
import { cn } from "@/lib/utils";


const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = "arrow", className = "" }) => {
	if (items.length === 0) {
		return null;
	}

	return (
		<nav aria-label="breadcrumb" className={cn("flex items-center space-x-2 text-sm text-gray-600", className)}>
			{items.map((item: BreadcrumbItem, index: number) => (
				<div key={index} className="flex items-center">
					{index > 0 && <span className="mr-2 text-gray-400">{Separator(separator)}</span>}
					<span className={`${index === items.length - 1 ? "text-gray-900 font-medium" : "hover:text-blue-600"}`}>{item.title}</span>
				</div>
			))}
		</nav>
	);
};

export default Breadcrumb;
