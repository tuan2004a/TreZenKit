import { cn } from "@lib/utils";
import { Toast, showToast, Button } from "@/plugins";

function App() {
	
	const notify = () => showToast("Lưu thành công!", { status: "success", closeDuration: 3000 });

	return (
		<div className={cn("flex flex-col items-center py-10 gap-8 max-w-4xl mx-auto")}>
			<Button variant="Primary" onClick={notify}>
				Notify!
			</Button>
			<Toast placement="bl" />
		</div>
	);
}

export default App;
