import { Button } from "@/plugins/button/index";
import { tooltipTop } from "@/plugins/tooltip/index";

function MultipleButtons() {
	return (
		<div className="flex items-center justify-center h-screen gap-3">
			<Button variant="Primary" data-tooltip="Tooltip Top" className={`${tooltipTop} `}>
				size-5
			</Button>
		</div>
	);
}

export default MultipleButtons;
