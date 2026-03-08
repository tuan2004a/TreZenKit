import type { ReactNode } from "react";

type StatusType = "info" | "success" | "error" | "warning" | "loading";

// type ToastTransition = "Bounce" | "Slide" | "Fade";

export interface BasicProps {
	title?: string;
	className?: string;
	children?: ReactNode;
	status?: StatusType;
	placement?: string;
	autoClose?: boolean; // bật tắt tự động đóng Toast
	pauseOnHover?: boolean; // bật tắt dừng thời gian Toast khi hover
	closeOnClick?: boolean; // Ấn nút x để tắt
	// transition?: ToastTransition; // style Animation
	theme?: string;
	closeDuration?: number; //thời gian đóng Toast
	onClose?: () => void;
}

export type ToastProps = ({ variant: "basic" } & BasicProps) | ({ variant: "customs" } & BasicProps);
