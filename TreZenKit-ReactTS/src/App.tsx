import { cn } from "@lib/utils";
import { Progress } from "@/plugins/progress";

function index() {
	return (
		<div className={cn("flex flex-col items-center justify-center h-screen gap-5 max-w-2xl")}>
			<Progress variant="basic" percent={75} />
			<Progress variant="circular" percent={75} />
			<Progress variant="circularGap" percent={50} placement={-80} gapAngle={100}/>
		</div>
	);
}

export default index;
