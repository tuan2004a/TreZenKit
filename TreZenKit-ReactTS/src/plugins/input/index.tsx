import type { InputProps } from "./interface";
import { InputText } from "./variants/index";

const Input = (props: InputProps) => {
	const { variant = "text", ...restProps } = props as any;

	switch (variant) {
		case "text":
			return <InputText {...restProps} />;
		case "number":

		default:
			break;
	}
};
Input.displayName = "Input";

export default Input;
