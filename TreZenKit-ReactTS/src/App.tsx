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
						title: "Application Center",
						href:"/app-center"
					},
					{
						title: "Application List",
						href:"/app-list"
					},
					{
						title: "An Application",
					},
				]}
				className="mb-4"
				separator="chevron"
			/>
		</div>
	);
}

export default MultipleButtons;
