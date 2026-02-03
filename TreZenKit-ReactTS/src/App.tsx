import { cn } from "@lib/utils";
import { Input } from "@/plugins/input";

function index() {
	return (
		<div className={cn("flex flex-col items-center justify-center h-screen gap-5 max-w-2xl")}>
			<Input variant="text" placeholder="Phone" />
		</div>
	);
}

export default index;
