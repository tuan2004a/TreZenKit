import { forwardRef, useEffect, useImperativeHandle } from "react";
import type { BasicProps } from "../../interface";
import { cn } from "../../../../lib/utils";
import { useToast } from "../../shared";
import { BtnClose, Title, ProgressBar } from "./index";

export interface ToastHandle {
	showToast: () => void;
}

const ToastBasic = forwardRef<ToastHandle, BasicProps>((props, ref) => {
	const {
		title,
		className,
		autoClose = true,
		pauseOnHover = true,
		closeOnClick = false,
		closeDuration = 5000,
		onClose,
	} = props;

	const { toastRef, isPaused, isClosing, showToast, BtnOnClick, handleMouseEnter, handleMouseLeave, handleToastClick } = useToast({
		...props,
		autoClose,
		pauseOnHover,
		closeOnClick,
		closeDuration,
	});

	useImperativeHandle(ref, () => ({ showToast }), [showToast]);

	useEffect(() => {
		showToast();
	}, [showToast]);

	useEffect(() => {
		if (!isClosing) return;
		const timeout = setTimeout(() => onClose?.(), 300);
		return () => clearTimeout(timeout);
	}, [isClosing, onClose]);

	return (
		<div ref={toastRef} className={cn("toast-basic fixed shadow-[0px_0px_25px_0px_#cbd5e0] flex items-center cursor-default rounded-lg overflow-hidden bg-white", className)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleToastClick}>
			<div className="w-70 h-15 relative p-3 pl-4 flex items-center select-none">
				<Title title={title} />
				<BtnClose onClick={BtnOnClick} />
				<ProgressBar autoClose={autoClose} isRunning={!isPaused} isVisible={!isClosing} closeDuration={closeDuration} />
			</div>
		</div>
	);
});

export default ToastBasic;
