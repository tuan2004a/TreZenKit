import { useCallback, useEffect, useRef, useState } from "react";
import type { BasicProps } from "../interface";

export function useToast(props: BasicProps) {
	const { autoClose = true, pauseOnHover = true, closeDuration = 5000, closeOnClick = true } = props;

	const [isPaused, setIsPaused] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const toastRef = useRef<HTMLDivElement | null>(null);
	const timeOutRef = useRef<NodeJS.Timeout | null>(null);
	const startTimeRef = useRef<number>(0);
	const remainingRef = useRef(closeDuration);

	// Xóa thời gian
	const clearTimer = useCallback(() => {
		if (timeOutRef.current) {
			clearTimeout(timeOutRef.current);
			timeOutRef.current = null;
		}
	}, []);

	// Xóa Toast
	const removeToast = useCallback(() => {
		const toastElement = toastRef.current;
		if (!toastElement) return;

		toastElement.classList.remove("ShowToast");
		setIsClosing(true);
		clearTimer();
	}, [clearTimer]);

	//tự độn xóa khi hết thời gian(có cả animation)
	const autoCloseToast = useCallback(() => {
		if (!autoClose) return;

		const toastElement = toastRef.current;
		if (!toastElement) return;

		startTimeRef.current = Date.now();
		timeOutRef.current = setTimeout(() => {
			removeToast();
		}, remainingRef.current);
	}, [autoClose, removeToast]);

	// sử lý khi đưa chưa chuột vô (hover hoặc click)
	const handleMouseEnter = useCallback(() => {
		if (!pauseOnHover || !timeOutRef.current) return;

		const elapsed = Date.now() - startTimeRef.current;
		remainingRef.current = Math.max(0, remainingRef.current - elapsed);
		clearTimer();
		setIsPaused(true);
	}, [pauseOnHover, clearTimer]);

	// sử lý khi đưa chuột ra (hover hoặc click)
	const handleMouseLeave = useCallback(() => {
		if (!pauseOnHover || timeOutRef.current) return;

		setIsPaused(false);
		autoCloseToast();
	}, [pauseOnHover, autoCloseToast]);

	const showToast = useCallback(() => {
		const toastElement = toastRef.current;
		if (!toastElement) return;

		remainingRef.current = closeDuration;

		setIsClosing(false);
		clearTimer();

		if (autoClose == true) {
			toastElement.removeEventListener("mouseenter", handleMouseEnter);
			toastElement.removeEventListener("mouseleave", handleMouseLeave);
			toastElement.addEventListener("mouseenter", handleMouseEnter);
			toastElement.addEventListener("mouseleave", handleMouseLeave);
		}

		autoCloseToast();
	}, [autoClose, closeDuration, clearTimer, handleMouseEnter, handleMouseLeave, autoCloseToast]);

	// Nút Ẩn Toast
	const BtnOnClick = useCallback(() => {
		if (closeOnClick == false) return;
		removeToast();
	}, [closeOnClick, removeToast]);

	// Ẩn Toast khi click trực tiếp vào toast (nếu được bật)
	const handleToastClick = useCallback(() => {
		if (!closeOnClick) return;
		removeToast();
	}, [closeOnClick, removeToast]);

	useEffect(() => {
		const toastElement = toastRef.current;
		return () => {
			clearTimer();
			if (toastElement) {
				toastElement.removeEventListener("mouseenter", handleMouseEnter);
				toastElement.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, [clearTimer, handleMouseEnter, handleMouseLeave]);

	return {
		toastRef,
		isClosing,
		isPaused,
		showToast,
		BtnOnClick,
		handleMouseEnter,
		handleMouseLeave,
		handleToastClick,
	};
}
