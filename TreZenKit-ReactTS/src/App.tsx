import { cn } from "@lib/utils";
import { InputNumber, InputText, InputPassword } from "@/plugins/input";

function index() {
	return (
		<div className={cn("flex flex-col items-center justify-center h-screen gap-5 max-w-2xl")}>
			<InputNumber placeholder="Phone Number" datatype="fgass"/>
			<InputText placeholder="Text string" />
			<InputPassword placeholder="Password" />
		</div>
	);
}

export default index;
