import type { ProgressProps } from "./interface";
import { ProgressBasic, ProgressCircular, ProgressCircularGap } from "./variants";

const Progress = (props: ProgressProps) => {
	const { variant = "basic", percent, placement, size, gapAngle, ...restProps } = props;

	switch (variant) {
		case "basic":
			return <ProgressBasic percent={percent} {...restProps} />;

		case "circular":
			return <ProgressCircular size={size} percent={percent} placement={placement} {...restProps} />;

		case "circularGap":
			return <ProgressCircularGap size={size} percent={percent} placement={placement} gapAngle={gapAngle} {...restProps} />;
		default:
			break;
	}
};
Progress.displayName = "Progress";

export default Progress;
