import { cn } from "@lib/utils";
import { Divider } from "@/plugins/divider";

function index() {
	return (
		<div className={cn("flex items-center justify-center h-screen gap-5")}>
			<div className="flex-center w-3xs">
				<Divider className="w-full" >Divider</Divider>
			</div>
		</div>
	);
}

export default index;
