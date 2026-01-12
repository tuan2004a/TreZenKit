import { Breadcrumb } from "@/plugins/breadcrumb/index";

function MultipleButtons() {
	return (
		<div className="flex items-center justify-center h-screen gap-3">
			<Breadcrumb
				items={[
					{
						title: "Home",
					},
					{
						title: <a href="/app-center">Application Center</a>, 
					},
					{
						title: <a href="/app-list">Application List</a>,
					},
					{
						title: "An Application", 
					},
				]}
				className="mb-4"
				separator="slash"
			/>

			
		</div>
	);
}

export default MultipleButtons;
