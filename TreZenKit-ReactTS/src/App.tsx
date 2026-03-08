import { cn } from "@lib/utils";
import { ToastContainer, toast } from "@/plugins";

function App() {
	const notify = () => {
		toast("Wow so easy!", {
			autoClose: true,
			closeDuration: 5000,
			pauseOnHover: true,
			closeOnClick: true,
		});
	};

	return (
		<div className={cn("flex flex-col items-center justify-center h-screen gap-5 max-w-2xl mx-auto")}>
			<button type="button" onClick={notify} className="rounded-lg bg-black text-white px-4 py-2 hover:opacity-90 transition-opacity">
				Notify!
			</button>

			<ToastContainer />
		</div>
	);
}

export default App;
