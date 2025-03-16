import { useEffect } from "react";
import { useAppStore } from "../store";
import { FileList } from "../components/FileList";
import { Favorites } from "../components/Favorites";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";

export const App = () => {
  const { id } = useParams();
  const { files, isLoading, getFiles } = useAppStore();

  const isRoot = id === undefined;
  const currentDir = isRoot
    ? Object.values(files).find((file) => file.parentId === null)
    : files[Number(id)];

  useEffect(() => {
    if (Object.keys(files).length === 0) {
      getFiles();
    }
  }, [getFiles, files]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <FileList files={currentDir} />

      {isRoot && <Favorites />}
    </div>
  );
};
