import type { ProgressProps } from "./interface";
import { ProgressBasic, ProgressCircular } from "./variants";

const Progress = (props: ProgressProps) => {
	const { variant = "basic", percent, size, ...restProps } = props as any;

	switch (variant) {
		case "basic":
			return <ProgressBasic percent={percent} {...restProps} />;

		case "circular":
			return <ProgressCircular size={size} percent={percent} {...restProps} />;

		default:
			break;
	}
};
Progress.displayName = "Progress";

export default Progress;
