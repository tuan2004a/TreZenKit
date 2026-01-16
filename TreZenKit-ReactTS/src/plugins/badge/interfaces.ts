import type { ReactNode } from "react";

type Variant = "default" | "notif" | "dot";
type Placement = "tr" | "tl" | "br" | "bl";
type Rounded = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface BadgeDefaultProps {
	variant?: Variant;
	className?: string;
	children?: ReactNode;
	rounded?: Rounded;
}

export interface BadgeNotifProps extends Omit<BadgeDefaultProps, "children"> {
	placement?: Placement;
}

export type BadgeProps = ({ variant: "default" } & BadgeDefaultProps) | ({ variant: "notif" } & BadgeNotifProps);
