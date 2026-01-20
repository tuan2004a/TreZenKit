import type { AvatarBasicProps } from "../interfaces";
import { cn } from "@/lib/utils";
import { Size, Rounded } from "../shared/index";
import React from "react";

const Avatar: React.FC<AvatarBasicProps> = ({ src = "https://i.pravatar.cc/", rounded = "md", alt = "avatar", size, className, ...props }) => {
	const fallbackSrc = "https://placehold.co/400?text=Avatar";

	return (
		<img
			loading="lazy"
			decoding="async"
			className={cn("relative object-cover object-center ", Rounded(rounded), Size(size), className)}
			src={src}
			onError={(e) => {
				// Set fallback chỉ một lần để tránh loop
				if (e.currentTarget.src !== fallbackSrc) {
					e.currentTarget.src = fallbackSrc;
				}
			}}
			alt={alt}
			{...props}
		/>
	);
};

export default Avatar;
