import styles from "./styles.module.css";

type ActionColor = "yellow" | "lime" | "green";

interface ActionProps {
  icon: React.ReactNode;
  title: string;
  color: ActionColor;
}

export const Action = ({ icon, title, color }: ActionProps) => {
  return (
    <button className={`${styles.action} ${styles[color]}`}>
      {icon}
      {title}
    </button>
  );
};
