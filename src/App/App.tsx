import { useEffect } from "react";
import { useAppStore } from "../store";
import { FileList } from "../components/FileList";
import { Favorites } from "../components/Favorites";
import styles from "./styles.module.css";

export const App = () => {
  const { files, isLoading, getFiles } = useAppStore();

  useEffect(() => {
    getFiles();
  }, [getFiles]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <FileList
        files={Object.values(files).find((file) => file.parentId === null)}
      />

      <Favorites />
    </div>
  );
};
