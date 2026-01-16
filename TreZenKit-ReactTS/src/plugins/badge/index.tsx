import { BadgeDefault, BadgeNotif, BadgeCount } from "./variants";
import type { BadgeProps } from "./interfaces";

const Badge = (props: BadgeProps) => {
	const { variant = "default", className, rounded, children, placement, total, spacing, size } = props as any;

	switch (variant) {
		case "default":
			return (
				<BadgeDefault className={className} rounded={rounded}>
					{children}
				</BadgeDefault>
			);

		case "notif":
			return <BadgeNotif className={className} placement={placement} size={size} />;

		case "count":
			return <BadgeCount className={className} placement={placement} total={total} spacing={spacing} />;

		default:
			throw new Error(`Unsupported variant: ${variant}`);
	}
};
Badge.displayName = "Badge";

export default Badge;
