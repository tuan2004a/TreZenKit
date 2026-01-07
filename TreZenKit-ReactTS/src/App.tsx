import { Button } from "@/plugins/button/index";
// Giả sử bạn có icon component, ví dụ từ react-icons

function MultipleButtons() {
	return (
		<div className="flex items-center justify-center h-screen gap-3">
			<Button size={1} variant="primary" >
				Size 1
			</Button>
			<Button size={2} variant="primary">
				Size 2
			</Button>
			<Button size={3} variant="primary">
				Size 3
			</Button>
			<Button size={4} variant="primary">
				Size 4
			</Button>
			<Button size={5} variant="primary">
				Size 5
			</Button>
			<Button size={6} variant="primary">
				Size 6
			</Button>
			<Button size={7} variant="primary">
				Size 7
			</Button>
			<Button size={8} variant="primary">
				Size 8
			</Button>
			<Button size={9} variant="primary">
				Size 9
			</Button>
			<Button size={10} rounded="xl" variant="primary">
				Size 10
			</Button>
		</div>
	);
}

export default MultipleButtons;
