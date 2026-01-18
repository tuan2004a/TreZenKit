import { cn } from "@lib/utils";
import { Divider } from "@/plugins/divider";

function index() {
	return (
		<div className="flex items-center justify-center h-screen gap-5">
			<Button variant="Primary" data-tooltip="tooltip top" className={cn(tooltipLeft)}>
				Tooltip
			</Button>
			<Button variant="Primary" size={5} data-tooltip="tooltip top" className={cn(tooltipTop)}>
				Tooltip
			</Button>
			<Button variant="Primary" data-tooltip="tooltip top" className={cn(tooltipBottom)}>
				Tooltip
			</Button>
			<Button variant="Primary" data-tooltip="tooltip top" className={cn(tooltipRight)}>
				Tooltip
			</Button>
		</div>
	);
}

export default index;
