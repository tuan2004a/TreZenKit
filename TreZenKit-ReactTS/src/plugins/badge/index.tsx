import { BadgeDefault, BadgeNotif } from "./variants";
import type { BadgeProps } from "./interfaces";

const Badge = (props: BadgeProps) => {
	const { variant = "default", className, rounded, children, placement } = props as any;

	switch (variant) {
		case "default":
			return (
				<BadgeDefault className={className} rounded={rounded}>
					{children}
				</BadgeDefault>
			);

		case "notif":
			return <BadgeNotif placement={placement} className={className} />;

		default:
			throw new Error(`Unsupported variant: ${variant}`);
	}
};
Badge.displayName = "Badge";

export default Badge;
