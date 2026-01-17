import { BadgeBasic, BadgeNotif, BadgeCount, BadgeStatus } from "./variants";
import type { BadgeProps } from "./interfaces";

const Badge = (props: BadgeProps) => {
	const { variant = "basic", className, rounded, children, placement, total, size, classDot } = props as any;

	switch (variant) {
		case "basic":
			return (
				<BadgeBasic className={className} rounded={rounded}>
					{children}
				</BadgeBasic>
			);

		case "notif":
			return <BadgeNotif className={className} placement={placement} size={size} />;

		case "count":
			return <BadgeCount className={className} placement={placement} total={total} size={size} />;

		case "status":
			return (
				<BadgeStatus className={className} classDot={classDot} size={size}>
					{children}
				</BadgeStatus>
			);

		default:
			throw new Error(`Unsupported variant: ${variant}`);
	}
};
Badge.displayName = "Badge";

export default Badge;
