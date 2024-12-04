import styles from "./CalendarDoor.module.scss";

type Props = { number: number };

export function CalendarDoor({ number }: Props) {
  return (
    <div className={styles["calendar-door"]}>
      <div className={styles["front-door"]}>
        <p className={styles["front-door__text"]}>{number}</p>
      </div>
    </div>
  );
}
