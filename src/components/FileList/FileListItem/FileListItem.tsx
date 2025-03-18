import { File, FileImage, Folder } from "@phosphor-icons/react";
import { Item } from "../../../classes/Item";
import { useAppStore } from "../../../store";
import styles from "./styles.module.css";
import { Favorite } from "../../Buttons/Favorite";
import { useNavigate } from "react-router-dom";
import { isDir } from "../../../classes/Dir";
import { isFile } from "../../../classes/File";

const getIcon = (file: Item) => {
  if (isDir(file)) {
    return <Folder size={32} color="#fdcf2b" weight="fill" />;
  }

  if (isFile(file)) {
    return <FileImage size={32} color="#3c76c3" weight="fill" />;
  }

  return <File size={32} color="#3c76c3" />;
};

export const FileListItem = (file: Item) => {
  const navigate = useNavigate();

  const { toggleFavorite } = useAppStore();

  const onClickHandler = () => {
    if (isDir(file)) {
      navigate(`/${file.id}`);
    }
  };

  return (
    <li className={styles.item}>
      <div
        className={`${styles.fileWrapper} ${isDir(file) ? styles.dir : ""}`}
        onClick={onClickHandler}
      >
        {getIcon(file)}

        <span>{file.name}</span>
      </div>

      <Favorite
        isFavorite={file.isFavorite}
        onClick={() => toggleFavorite(file.id)}
      />
    </li>
  );
};
