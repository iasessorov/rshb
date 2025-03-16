import { Star } from "@phosphor-icons/react";
import { useAppStore } from "../../store";
import styles from "./styles.module.css";

export const Favorites = () => {
  const favorites = useAppStore((state) => state.favorites);
  const files = useAppStore((state) => state.files);

  return (
    <div>
      <div className={styles.header}>
        <Star size={32} color="#0a0a0a" weight="fill" />
        <h2 className={styles.title}>Избранное</h2>
      </div>

      <ul className={styles.list}>
        {favorites.map((favorite) => (
          <li className={styles.item} key={favorite}>
            {files[favorite].name}
          </li>
        ))}
      </ul>
    </div>
  );
};
