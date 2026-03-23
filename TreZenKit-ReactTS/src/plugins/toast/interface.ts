import type { ReactNode } from "react";

export type StatusType = "info" | "success" | "error" | "warning" | "loading";
export type PlacementType = "tr" | "tl" | "br" | "bl"

// type ToastTransition = "Bounce" | "Slide" | "Fade";

export interface BasicProps {
	id?: string;
	title?: string;
	className?: string;
	children?: ReactNode;
	status?: StatusType;
	placement?: string;
	autoClose?: boolean;
	pauseOnHover?: boolean;
	closeOnClick?: boolean;
	theme?: string;
	closeDuration?: number;
	onClose?: () => void;
	// transition?: ToastTransition; // style Animation
}

export type ToastProps = ({ variant: "basic" } & BasicProps) | ({ variant: "customs" } & BasicProps);
