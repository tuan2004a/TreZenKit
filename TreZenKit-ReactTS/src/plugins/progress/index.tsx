import type { ProgressProps } from "./interface";
import { ProgressBasic, ProgressCircular } from "./variants";

const Progress = (props: ProgressProps) => {
	const { variant = "basic", children, ...restProps } = props;

	switch (variant) {
		case "basic":
			return <ProgressBasic {...restProps}>{children}</ProgressBasic>;

		case "circular":
			return <ProgressCircular {...restProps}>{children}</ProgressCircular>;

		default:
			break;
	}
};
Progress.displayName = "Progress";

export default Progress;
