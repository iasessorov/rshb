import { File, FileImage, Folder } from "@phosphor-icons/react";
import { Item } from "../../../classes/Item";
import { useAppStore } from "../../../store";
import styles from "./styles.module.css";
import { Favorite } from "../../Buttons/Favorite";

const getIcon = (file: Item) => {
  const isDir = file.type === "dir";
  const isFile = file.type === "file";

  if (isDir) {
    return <Folder size={32} color="#fdcf2b" weight="fill" />;
  }

  if (isFile && file.isImage()) {
    return <FileImage size={32} color="#3c76c3" weight="fill" />;
  }

  return <File size={32} color="#3c76c3" />;
};

export const FileListItem = (file: Item) => {
  const { addFavorite, removeFavorite } = useAppStore();
  const isDir = file.type === "dir";

  const onClickHandler = () => {
    if (isDir) {
      console.log("navigate");
    }
  };

  return (
    <li className={styles.item}>
      <div
        className={`${styles.fileWrapper} ${isDir ? styles.dir : ""}`}
        onClick={onClickHandler}
      >
        {getIcon(file)}

        <span>{file.name}</span>
      </div>

      <Favorite
        isFavorite={file.isFavorite}
        onClick={() => {
          if (file.isFavorite) {
            removeFavorite(file.id);
          } else {
            addFavorite(file.id);
          }
        }}
      />
    </li>
  );
};
