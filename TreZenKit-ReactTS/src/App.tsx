import { Badge } from "@/plugins/badge/index";
import { Button } from "@/plugins/button/index";

function index() {
	return (
		<div className="flex items-center justify-center h-screen gap-3">
			<Badge variant="basic">Badge</Badge>

			<Button variant="Primary" className="relative">
				<Badge variant="notif" placement="br" size={5} className="bg-red-500" />
				hello
			</Button>

			<Button variant="Primary" className="relative">
				<Badge variant="count" placement="tr" total={99} size={1} className="bg-red-500" />
				hello
			</Button>
			<Badge variant="status" size={3}>Hiệu lực</Badge>
		</div>
	);
}

export default index;
