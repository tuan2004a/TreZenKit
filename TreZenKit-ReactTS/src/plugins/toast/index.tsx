import { useEffect, useState } from "react";
import type { BasicProps, ToastProps } from "./interface";
import { ToastBasic } from "./variants";
import "./style.css";

type ToastItem = {
	id: number;
	message: string;
	options?: Omit<BasicProps, "title">;
};

type ToastListener = (item: ToastItem) => void;

const listeners = new Set<ToastListener>();
let toastId = 0;

function emitToast(item: ToastItem) {
	listeners.forEach((listener) => listener(item));
}

export function toast(message: string, options?: Omit<BasicProps, "title">) {
	emitToast({
		id: ++toastId,
		message,
		options,
	});
}

function ToastRenderer(props: ToastProps) {
	const { variant } = props;

	switch (variant) {
		case "basic":
			return <ToastBasic {...props} />;
		default:
			return null;
	}
}

export function ToastContainer() {
	const [toasts, setToasts] = useState<ToastItem[]>([]);

	useEffect(() => {
		const listener: ToastListener = (item) => {
			setToasts((prev) => [...prev, item]);
		};

		listeners.add(listener);
		return () => {
			listeners.delete(listener);
		};
	}, []);

	const removeToast = (id: number) => {
		setToasts((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<div className="fixed top-4 right-4 z-9999 flex flex-col gap-3">
			{toasts.map((item) => (
				<ToastRenderer key={item.id} variant="basic" title={item.message} autoClose={item.options?.autoClose ?? true} closeDuration={item.options?.closeDuration ?? 5000} pauseOnHover={item.options?.pauseOnHover ?? true} closeOnClick={item.options?.closeOnClick ?? true} className={item.options?.className} onClose={() => removeToast(item.id)} />
			))}
		</div>
	);
}

export default ToastRenderer;
