import styles from "./Loader.module.css";

export default function Loader(): JSX.Element {
	return (
		<div className={styles["loader"]} data-testid="loadingSpinner"></div>
	);
}
