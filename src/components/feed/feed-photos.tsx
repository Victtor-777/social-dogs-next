import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo, i) => (
        <li className={styles.photo} key={photo.id + i}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={1000}
              height={1000}
              sizes="80vw"
            />
          </Link>
          {/* <span className={styles.visualizacao}>{photo.acessos}</span> */}
        </li>
      ))}
    </ul>
  );
}
