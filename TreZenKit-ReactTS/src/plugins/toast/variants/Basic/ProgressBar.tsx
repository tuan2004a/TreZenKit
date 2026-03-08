interface ProgressBarProps {
	autoClose?: boolean;
	isRunning?: boolean;
	isVisible?: boolean;
	closeDuration: number;
}

const ProgressBar = ({ autoClose = true, isRunning = true, isVisible = true, closeDuration }: ProgressBarProps) => {
	if (!autoClose || !isVisible) return null;

	return (
		<div className="absolute w-full h-0.75 bottom-0 left-0 bg-gray-200 overflow-hidden">
			<div
				className="h-full bg-red-500 origin-left"
				style={{
					animationName: "toast-progress",
					animationDuration: `${closeDuration}ms`,
					animationTimingFunction: "linear",
					animationFillMode: "forwards",
					animationPlayState: isRunning ? "running" : "paused",
				}}
			/>
		</div>
	);
};

export default ProgressBar;
