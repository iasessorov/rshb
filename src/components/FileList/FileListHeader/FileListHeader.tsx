import {
  CopySimple,
  FolderPlus,
  MagicWand,
  UploadSimple,
} from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { Action } from "../../Buttons/Action";

type FileListHeaderProps = {
  title: string;
};

export const FileListHeader = ({ title }: FileListHeaderProps) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <CopySimple size={32} weight="fill" />
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.actions}>
        <Action
          icon={<FolderPlus size={16} color="#0a0a0a" weight="fill" />}
          title="Создать папку"
          color="yellow"
        />
        <Action
          icon={<UploadSimple size={16} color="#0a0a0a" weight="bold" />}
          title="Загрузить файл"
          color="lime"
        />
        <Action
          icon={<MagicWand size={16} color="#ffffff" />}
          title="Создать файл"
          color="green"
        />
      </div>
    </div>
  );
};
