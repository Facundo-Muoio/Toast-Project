import React, { useState, useContext } from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [message, setMessage] = useState("");
	const [radioButton, setRadioButton] = useState("notice");
	const { createToast } = useContext(ToastContext);

	const listOfRadioInputs = VARIANT_OPTIONS.map(option => {
		return (
			<label key={option} htmlFor={option}>
				<input
					type="radio"
					id={option}
					value={option}
					checked={radioButton === option}
					onChange={event => setRadioButton(event.target.value)}
				/>
				{option}
			</label>
		);
	});

	const handlerSubmit = event => {
		event.preventDefault();
		if (message.trim()) {
			createToast(message, radioButton);
			setMessage("");
			setRadioButton("notice");
		}
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf />

			<form className={styles.controlsWrapper} onSubmit={handlerSubmit}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: "baseline" }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={event => setMessage(event.target.value)}
							required
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{listOfRadioInputs}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
