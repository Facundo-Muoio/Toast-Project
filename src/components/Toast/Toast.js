import React, { useContext } from "react";
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from "react-feather";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import VisuallyHiddden from "../VisuallyHidden/VisuallyHidden";

function Toast({ id, varient, message }) {
	const ICONS_BY_VARIANT = {
		notice: <Info />,
		warning: <AlertTriangle />,
		success: <CheckCircle />,
		error: <AlertOctagon />,
	};

	const { dismissToast } = useContext(ToastContext);
	const icon = ICONS_BY_VARIANT[varient];

	return (
		<div className={`${styles.toast} ${styles[varient]}`}>
			<div className={styles.iconContainer}>{icon}</div>
			<p className={styles.content}>
				<VisuallyHiddden>{varient} -</VisuallyHiddden>
				{message}
			</p>
			<button
				className={styles.closeButton}
				onClick={() => dismissToast(id)}
				aria-label="Dismiss message"
				aria-live="off"
			>
				<X size={24} />
			</button>
		</div>
	);
}

export default Toast;
