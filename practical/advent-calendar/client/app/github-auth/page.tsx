"use client";

import { LoadingWheel } from "@/components/Loading-Wheel";

import styles from "./styles.module.scss";
import { useCodeSubmit } from "../hooks/use-code-submit/use-code-submit";

export default function GithubAuth() {
  useCodeSubmit();

  return (
    <div className={styles["github-auth"]}>
      <main>
        <LoadingWheel className={styles["loading-wheel"]} />
      </main>
    </div>
  );
}
