import { cn } from "@lib/utils";
import { Progress } from "@/plugins/progress";

function index() {
	return (
		<div className={cn("flex items-center justify-center h-screen gap-5 max-w-2xl")}>
			<Progress variant="circular"></Progress>
		</div>
	);
}

export default index;
