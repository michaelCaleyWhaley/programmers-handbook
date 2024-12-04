"use client";

import { CalendarDoor } from "@/components/Calendar-Door/CalendarDoor";
import Snowfall from "react-snowfall";

// import styles from "./styles.module.scss";

export default function AdventCalendar() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {new Array(25).fill(1).map((_, index) => {
          const key = `door-${index.toString()}`;
          return <CalendarDoor key={key} number={index + 1} />;
        })}
      </main>
    </div>
  );
}
