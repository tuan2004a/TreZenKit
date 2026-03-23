import type { ToastProps, BasicProps } from "./interface";
import { ToastBasic } from "./variants";
import "./style.css";

function Toast(props: BasicProps) {
	const { className, placement } = props;

	return <ToastBasic className={className} placement={placement} />;
}

export default Toast;