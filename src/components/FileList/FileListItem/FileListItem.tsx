import { useAppStore } from "../../../store";
import styles from "./styles.module.css";
import { Favorite } from "../../Buttons/Favorite";
import { FileListItemTitle } from "./FileListItemTitle";
import { FileItem } from "../../../classes/File";
import { DirItem } from "../../../classes/Dir";

export const FileListItem = (file: FileItem | DirItem) => {
  const { toggleFavorite } = useAppStore();

  return (
    <li className={styles.item}>
      <FileListItemTitle file={file} />

      <Favorite
        isFavorite={file.isFavorite}
        onClick={() => toggleFavorite(file.id)}
      />
    </li>
  );
};
