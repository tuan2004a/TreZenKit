import type { BasicProps } from "../../interface";
import { cn } from "@/lib/utils";
import { BtnClose, Title, ProgressBar } from "./index";
import { ToastStore } from "../../store/index";
import { useEffect, useState } from "react";
import { Placement } from "../../shared/index";

const ToastBasic = (props: BasicProps) => {
	const { className, placement } = props;

	const [toasts, setToasts] = useState<BasicProps[]>([]);

	useEffect(() => {
		const unsubscribe = ToastStore.subscribe(setToasts);
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<div className={cn("shadow-[0px_0px_25px_0px_#cbd5e0] flex items-center cursor-default rounded-lg overflow-hidden bg-white", Placement(placement), className)}>
			{toasts.map((item) => (
				<div key={item.id} className={(cn("w-70 h-15 relative p-3 pl-4 flex items-center select-none"))}>
					<Title title={item.title} />
					<BtnClose />
					<ProgressBar closeDuration={item.closeDuration}/>
				</div>
			))}
		</div>
	);
};

export default ToastBasic;
