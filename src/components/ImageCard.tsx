import styles from "./ImageCard.module.css";

interface ImageCardProps {
	imageContentLink: string;
	alt: string;
	imageTitle: string;
	imageDescription: string;
}

export function ImageCard({
	imageContentLink,
	alt,
	imageTitle,
	imageDescription,
}: ImageCardProps): JSX.Element {
	return (
		<div className={styles["card"]}>
			<CardImage imageContentLink={imageContentLink} alt={alt} />
			<CardDetails
				imageContentLink={imageContentLink}
				imageDescription={imageDescription}
				imageTitle={imageTitle}
			/>
		</div>
	);
}

function CardImage({
	alt,
	imageContentLink,
}: Pick<ImageCardProps, "imageContentLink"> & { alt: string }): JSX.Element {
	return (
		<a
			href={imageContentLink}
			title={/*imageTitle*/ ""}
			className={styles["card-image"]}
		>
			<img src={imageContentLink} alt={alt} />
		</a>
	);
}

function CardDetails({
	imageTitle,
	imageDescription,
	imageContentLink,
}: Omit<ImageCardProps, "alt">): JSX.Element {
	return (
		<div className={styles["card-details"]}>
			<h6 className={styles["card-details-title"]}>{imageTitle}</h6>
			<p className={styles["card-details-description"]}>
				{imageDescription}
			</p>
			<a href={imageContentLink} className={styles["card-details-cta"]}>
				Explore ➔
			</a>
		</div>
	);
}
