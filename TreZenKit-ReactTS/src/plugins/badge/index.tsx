import React from "react";
import { BadgeBasic, BadgeNotif, BadgeCount, BadgeStatus } from "./variants";
import type { BadgeProps } from "./interfaces";

function Badge(props: BadgeProps) {
	const { variant } = props;

	switch (variant) {
		case "basic": {
			const { className, rounded, children } = props;

			return (
				<BadgeBasic className={className} rounded={rounded}>
					{children}
				</BadgeBasic>
			);
		}

		case "notif": {
			const { className, placement, size } = props;

			return <BadgeNotif className={className} placement={placement} size={size} />;
		}

		case "count": {
			const { className, placement, total, size } = props;

			return <BadgeCount className={className} placement={placement} total={total} size={size} />;
		}

		case "status": {
			const { className, classDot, size, children } = props;

			return (
				<BadgeStatus className={className} classDot={classDot} size={size}>
					{children}
				</BadgeStatus>
			);
		}

		default: {
			// Đảm bảo kiểm soát đầy đủ các variant ở mức type (exhaustive check)
			const _exhaustiveCheck: never = variant;
			throw new Error(`Unsupported variant: ${_exhaustiveCheck}`);
		}
	}
}

Badge.displayName = "Badge";

export default Badge;
