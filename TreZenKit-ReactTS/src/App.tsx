import { Badge } from "@/plugins/badge/index";
import { Button } from "@/plugins/button/index";

function index() {
	return (
		<div className="flex items-center justify-center h-screen gap-3">
			<Badge variant="default">Badge</Badge>

			<Button variant="Primary" className="relative">
				<Badge placement="br" variant="notif" className="bg-red-500" />
				hello
			</Button>

			<Button variant="Primary" className="relative">
				<Badge placement="tl" total={99} variant="count" className="bg-red-500" />
				hello
			</Button>
		</div>
	);
}

export default index;
