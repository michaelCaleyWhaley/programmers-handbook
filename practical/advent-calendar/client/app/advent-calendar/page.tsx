"use client";

import { CalendarDoor } from "@/components/Calendar-Door/CalendarDoor";
import Snowfall from "react-snowfall";

import styles from "./styles.module.scss";
import { useVerifiedUser } from "../hooks/use-verified-user";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { shuffleArray } from "../helpers/shuffle-array";

export default function AdventCalendar() {
  const userData = useVerifiedUser();

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
        <div className={styles["user"]}>
          {userData?.avatar_url && (
            <Image
              style={{ borderRadius: "100%" }}
              width={200}
              height={200}
              src={userData.avatar_url}
              alt="Avatar"
            />
          )}
          {userData?.login && <h1>{userData.login}</h1>}
        </div>

        <div className={styles["calendar"]}>
          {userData &&
            shuffleArray(
              new Array(24).fill(1).map((_, index) => {
                const key = `door-${index.toString()}`;
                return (
                  <CalendarDoor
                    className={styles["row__item"]}
                    key={key}
                    number={index + 1}
                    image={
                      IMAGES[index] ??
                      `https://cataas.com/cat?${index.toString()}`
                    }
                  />
                );
                // eslint-disable-next-line prettier/prettier
              })
            )}
        </div>
      </main>
    </div>
  );
}
