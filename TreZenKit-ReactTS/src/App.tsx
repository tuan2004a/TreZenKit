import { cn } from "@lib/utils";
import { Tag } from "@/plugins/tag";

function index() {
	return (
		<div className={cn("flex items-center justify-center h-screen gap-5")}>
			<Tag variants="removable">Tất cả</Tag>
		</div>
	);
}

export default index;
