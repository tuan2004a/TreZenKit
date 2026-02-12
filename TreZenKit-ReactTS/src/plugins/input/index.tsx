import type { InputProps } from "./interface";
import { InputText, InputNumber } from "./variants/index";

function Input(props: InputProps) {
	const { variant = "text", ...restProps } = props;

	switch (variant) {
		case "text":
			return <InputText {...restProps} />;

		case "number":
			return <InputNumber {...restProps} />;

		default:
			return null;
	}
}

Input.displayName = "Input";

export default Input;
