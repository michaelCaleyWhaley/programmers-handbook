import classNames from "classnames";

import styles from "./CalendarDoor.module.scss";
import Image from "next/image";
import { useState } from "react";

type Props = { number: number; className?: string; image?: string };

export function CalendarDoor({ number, className = "", image }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(styles["calendar-door"], {
        [className]: className,
      })}
    >
      <div
        className={classNames(styles["front-door"], {
          [styles["front-door--open"]]: isOpen,
        })}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className={styles["front-door__text"]}>{number}</p>
      </div>
      {image && (
        <Image
          className={styles[image]}
          src={image}
          alt=""
          width={200}
          height={200}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          loading="eager"
          priority
        />
      )}
    </div>
  );
}
