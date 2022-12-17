import { useEffect } from 'react';
import styles from './DialogBox.module.css';

const DialogBox = (props) => {
	useEffect(() => {
		setTimeout(() => {
			props.setShowDialogBox(false);
		}, 2000);
	}, [props.showBox]);

	return (
		<div
			className={styles.dialogBox}
			style={{
				display: props.showBox ? 'block' : 'none',
				opacity: props.showBox ? '1' : '0',
			}}
		>
			<p className={styles.message}>{props.children}</p>
		</div>
	);
};

export default DialogBox;
