import { Item } from "../../classes/Item";
import { FileListItem } from "./FileListItem";
import styles from "./styles.module.css";
import { FileListHeader } from "./FileListHeader";

interface FileListProps {
  files: Item | undefined;
}

export const FileList = ({ files }: FileListProps) => {
  if (!files) {
    return null;
  }

  return (
    <div>
      <FileListHeader title={files.name} />
      <ul className={styles.list}>
        {files.children.map((file) => (
          <FileListItem key={file.id} {...file} />
        ))}
      </ul>
    </div>
  );
};
