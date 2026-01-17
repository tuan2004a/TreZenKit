import type { ReactNode } from "react";

type Variant = "basic" | "notif" | "count" | "status";
type Placement = "tr" | "tl" | "br" | "bl";
type Rounded = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export type Size = 1 | 2 | 3 | 4 | 5;
type BaseColor = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral";
type StatusColor = "online" | "active" | "offline" | "busy" | "error" | "idle" | "maintenance";
export type Color = BaseColor | StatusColor;

export interface BadgeBasicProps {
	variant?: Variant;
	className?: string;
	children?: ReactNode;
	rounded?: Rounded;
	color?: Color;
}

export interface BadgeNotifProps extends Omit<BadgeBasicProps, "children"> {
	placement: Placement;
	size?: Size;
}
export interface BadgeCountProps extends BadgeNotifProps {
	total: number;
}
export interface BadgeStatusProps extends Omit<BadgeBasicProps, "rounded"> {
	classDot?: string;
	size?: Size;
}

export type BadgeProps = ({ variant: "basic" } & BadgeBasicProps) | ({ variant: "notif" } & BadgeNotifProps) | ({ variant: "count" } & BadgeCountProps) | ({ variant: "status" } & BadgeStatusProps);
