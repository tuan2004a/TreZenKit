// Toast/toastStore.ts
import type { BasicProps } from "../interface";

type Listener = (toasts: BasicProps[]) => void;

let toasts: BasicProps[] = [];
let listeners: Set<Listener> = new Set();

const notify = () => listeners.forEach((l) => l([...toasts]));

export const ToastStore = {
	add(title: string, options: BasicProps = {}) {
		const id = Date.now().toString();
		const newToast: BasicProps = {
			id,
			title,
			status: options.status ?? "info",
			placement: options.placement ?? "tr",
			closeDuration: options.closeDuration ?? 3000,
		};

		toasts = [...toasts, newToast];

		notify();
		setTimeout(() => ToastStore.remove(id), newToast.closeDuration);
	},

	remove(id: string) {
		toasts = toasts.filter((t) => t.id !== id);
		notify();
	},

	subscribe(listener: Listener) {
		listeners.add(listener);
		return () => listeners.delete(listener);
	},
};

// export const showToast = (title: string, status: StatusType, closeDuration?: number, placement?: PlacementType) => ToastStore.add(title, { status, closeDuration, placement });
