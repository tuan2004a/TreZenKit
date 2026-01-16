import { Badge } from "@/plugins/badge/index";
import { Button } from "@/plugins/button/index";

function MultipleButtons() {
	return (
		<div className="flex items-center justify-center h-screen gap-3">
			<Badge variant="default">Badge</Badge>

			<Button variant="Primary" className="relative">
				<Badge variant="notif" className="bg-red-500 size-3" />
				hello
			</Button>
		</div>
	);
}

export default MultipleButtons;
