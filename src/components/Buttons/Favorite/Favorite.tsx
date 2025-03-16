import { Star } from "@phosphor-icons/react";
import styles from "./styles.module.css";

type FavoriteProps = {
  isFavorite: boolean;
  onClick: () => void;
};

export const Favorite = ({ isFavorite, onClick }: FavoriteProps) => {
  if (isFavorite) {
    return (
      <button className={styles.favorite} onClick={onClick}>
        <Star size={16} color="#0a0a0a" weight="fill" />
      </button>
    );
  }

  return (
    <button className={styles.favorite} onClick={onClick}>
      <Star size={16} color="#0a0a0a" />
    </button>
  );
};
