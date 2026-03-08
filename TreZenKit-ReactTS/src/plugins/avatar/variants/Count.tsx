import type { AvatarCountProps } from "../interfaces";

const Count = ({ total = 0, ...props }: AvatarCountProps) => {
	return (
		<div {...props}>
			{total}
		</div>
	);
};

export default Count;
