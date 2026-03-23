// Vẫn trong ToastStore.ts, hoặc export riêng
import { ToastStore } from "../store/index";
import type { BasicProps } from "../interface";

export const showToast = (title: string, options?: BasicProps) => {
	ToastStore.add(title, options);
};

// Shorthand tiện dụng
showToast.success = (msg: string, opts?: Omit<BasicProps, "status">) => ToastStore.add(msg, { ...opts, status: "success" });

showToast.error = (msg: string, opts?: Omit<BasicProps, "status">) => ToastStore.add(msg, { ...opts, status: "error" });

showToast.warning = (msg: string, opts?: Omit<BasicProps, "status">) => ToastStore.add(msg, { ...opts, status: "warning" });

showToast.info = (msg: string, opts?: Omit<BasicProps, "status">) => ToastStore.add(msg, { ...opts, status: "info" });
