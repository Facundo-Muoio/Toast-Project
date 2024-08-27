import { createContext, useState } from "react";
import { useEscapeKey } from "../../hooks/customHooks.js";

export const ToastContext = createContext();

export default function ToastProvider({ children }) {
	const [toasts, setToasts] = useState([]);

	function createToast(message, radioButton) {
		setToasts([...toasts, { id: crypto.randomUUID(), message, radioButton }]);
	}

	function dismissToast(id) {
		setToasts(toasts.filter(toast => toast.id !== id));
	}

	useEscapeKey(() => setToasts([]));

	return (
		<ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
			{children}
		</ToastContext.Provider>
	);
}
