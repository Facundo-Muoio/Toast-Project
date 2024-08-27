import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
	const { toasts } = useContext(ToastContext);

	const listOfToast = toasts.map(({ id, message, radioButton }) => (
		<Toast key={id} id={id} message={message} varient={radioButton} />
	));

	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification"
		>
			{listOfToast}
		</ol>
	);
}

export default ToastShelf;
