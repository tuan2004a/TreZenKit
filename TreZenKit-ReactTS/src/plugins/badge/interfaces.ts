import type { ReactNode } from "react";

type Variant = "default" | "notif" | "count";
type Placement = "tr" | "tl" | "br" | "bl";
type Rounded = "xs" | "sm" | "md" | "lg" | "xl" | "full";
type Size = 1 | 2 | 3 | 4 | 5;

export interface BadgeDefaultProps {
	variant?: Variant;
	className?: string;
	children?: ReactNode;
	rounded?: Rounded;
}

export interface BadgeNotifProps extends Omit<BadgeDefaultProps, "children"> {
	placement: Placement;
	size?: Size;
}
export interface BadgeCountProps extends Omit<BadgeNotifProps, "children size"> {
	total: number;
	spacing?: Size;
}

export type BadgeProps = ({ variant: "default" } & BadgeDefaultProps) | ({ variant: "notif" } & BadgeNotifProps) | ({ variant: "count" } & BadgeCountProps);
