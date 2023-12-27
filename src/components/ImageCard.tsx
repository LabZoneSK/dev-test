import styles from "./ImageCard.module.css";

interface ImageCardProps {
	imageContentLink: string;
	// image alt
	imageTitle: string;
	imageDescription: string;
}

export function ImageCard({ imageContentLink }: ImageCardProps): JSX.Element {
	// adjust width, heigth and alt attribute
	return (
		<div className={styles["card"]}>
			<CardImage imageContentLink={imageContentLink} />
		</div>
	);
}

function CardImage({
	imageContentLink,
}: Pick<ImageCardProps, "imageContentLink">): JSX.Element {
	return (
		<a
			href={imageContentLink}
			title={/*imageTitle*/ ""}
			className={styles["card-image"]}
		>
			<img src={imageContentLink} />
		</a>
	);
}
