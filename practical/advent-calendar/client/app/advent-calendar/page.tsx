"use client";

import { CalendarDoor } from "@/components/Calendar-Door/CalendarDoor";
import Snowfall from "react-snowfall";

import styles from "./styles.module.scss";

export default function AdventCalendar() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Snowfall
        color="white"
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: "-1",
        }}
        snowflakeCount={100}
      />
      <main className={styles["main"]}>
        {new Array(24).fill(1).map((_, index) => {
          const key = `door-${index.toString()}`;
          return (
            <CalendarDoor
              className={styles["row__item"]}
              key={key}
              number={index + 1}
              image="/santa_island.webp"
            />
          );
        })}
      </main>
    </div>
  );
}
