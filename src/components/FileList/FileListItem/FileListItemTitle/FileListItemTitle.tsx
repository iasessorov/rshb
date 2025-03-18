import { File, Folder } from "@phosphor-icons/react";
import { FileImage } from "@phosphor-icons/react";
import { DirItem, isDir } from "../../../../classes/Dir";
import { FileItem, isFile } from "../../../../classes/File";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const getIcon = (file: FileItem | DirItem) => {
  if (isDir(file)) {
    return <Folder size={32} color="#fdcf2b" weight="fill" />;
  }

  if (isFile(file)) {
    return <FileImage size={32} color="#3c76c3" weight="fill" />;
  }

  return <File size={32} color="#3c76c3" />;
};

export const FileListItemTitle = ({ file }: { file: FileItem | DirItem }) => {
  if (isFile(file)) {
    return (
      <div className={styles.titleWrapper}>
        {getIcon(file)}

        <span>{file.name}</span>
      </div>
    );
  }

  return (
    <Link className={`${styles.titleWrapper} ${styles.dir}`} to={`/${file.id}`}>
      {getIcon(file)}

      <span>{file.name}</span>
    </Link>
  );
};
