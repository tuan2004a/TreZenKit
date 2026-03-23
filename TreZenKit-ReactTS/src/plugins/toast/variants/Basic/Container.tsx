import type { BasicProps } from "../../interface";
import { memo, useState } from "react";
import { cn } from "@/lib/utils";
import { ToastBasic } from "./index";
// import { useToast } from "@/plugins/toast/context/index";
import { ToastStore } from "../../store/index";

const ToastContainer = (props: BasicProps) => {
	const { className } = props;

	// const [toasts, setToasts] = useState<ToastItem[]>([]);

	return (
		<div className={cn("z-9999 fixed ")}>
			{toasts.map((item) => (
				<ToastBasic className={className} placement={item.placement} status={item.status} key={item.id} />
			))}
		</div>
	);
};

export default memo(ToastContainer);
