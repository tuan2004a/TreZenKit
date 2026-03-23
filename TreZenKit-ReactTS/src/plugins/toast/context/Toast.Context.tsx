//Toast/context/Toast.context.tsx
import { createContext, useContext, useState, useCallback, useMemo } from "react";
import type { BasicProps, StatusType } from "../interface";

interface ToastContextType {
	toasts: BasicProps[];
	showToast: (title: string, type: StatusType, closeDuration?: number) => void;
	removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = (props: BasicProps) => {
	const { title, status, placement, children, closeDuration = 5000 } = props;

	const [toasts, setToasts] = useState<BasicProps[]>([]);
	const [visible, setVisible] = useState(false);

	const showToast = useCallback(() => {
		const id = Date.now().toString();
		setVisible(true);
		setToasts((prev) => [...prev, { id, title, status, placement }]);

		setTimeout(() => removeToast(id), closeDuration);
	}, []);

	const removeToast = useCallback((id: string) => {
		setVisible(false);
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}, []);

	const ContextVale = useMemo(
		() => ({
			showToast,
			toasts,
			visible,
			removeToast,
		}),
		[showToast],
	);

	return <ToastContext.Provider value={ContextVale}>{children}</ToastContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within ToastProvider");
	}
	return context;
};
