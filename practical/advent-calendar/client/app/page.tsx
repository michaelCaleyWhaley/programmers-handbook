"use client";

import { ghSignInUrl } from "@/lib/github/urls";
import styles from "./styles.module.scss";
import { GITHUB_CLIENT_ID } from "@/constants/o-auth";

const gitHubSignInUrl = `${ghSignInUrl}?client_id=${GITHUB_CLIENT_ID}`;

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <a
          href={gitHubSignInUrl}
          className={styles["github-sign-in"]}
          aria-label="Login using GitHub"
          aria-busy="false"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.106 24c-.002-.466-.005-.914-.01-1.343a168.92 168.92 0 01-.009-1.685l-.436.075a5.57 5.57 0 01-1.052.066 8.027 8.027 0 01-1.318-.132 2.946 2.946 0 01-1.27-.568 2.403 2.403 0 01-.834-1.164l-.19-.436a4.731 4.731 0 00-.597-.966c-.272-.353-.547-.593-.825-.72l-.132-.094a1.391 1.391 0 01-.247-.228 1.039 1.039 0 01-.17-.265c-.038-.088-.007-.16.094-.218.102-.057.285-.084.55-.084l.38.056c.252.05.565.202.938.455.373.252.68.58.92.984.29.518.64.912 1.052 1.184.41.271.824.407 1.241.407.417 0 .778-.032 1.081-.095.303-.063.588-.158.853-.284.114-.846.424-1.496.93-1.95-.721-.076-1.369-.19-1.944-.342a7.743 7.743 0 01-1.782-.738 5.103 5.103 0 01-1.527-1.269c-.404-.505-.736-1.168-.995-1.988-.259-.821-.389-1.768-.389-2.841 0-1.528.5-2.828 1.498-3.901-.467-1.149-.423-2.437.133-3.863.367-.114.91-.029 1.63.255.721.284 1.249.528 1.584.73.335.201.603.372.806.51a13.478 13.478 0 013.64-.491c1.251 0 2.465.164 3.64.492l.721-.454a10.21 10.21 0 011.744-.834c.67-.252 1.182-.322 1.537-.208.568 1.427.619 2.714.15 3.863C21.502 6.989 22 8.29 22 9.817c0 1.073-.13 2.023-.389 2.85s-.593 1.49-1.004 1.988a5.3 5.3 0 01-1.536 1.26 7.758 7.758 0 01-1.783.738c-.575.152-1.223.266-1.943.342.657.568.986 1.464.986 2.689V24H9.106z"
              fill="currentcolor"
              fillRule="evenodd"
            ></path>
          </svg>
          GitHub
        </a>
      </main>
    </div>
  );
}
