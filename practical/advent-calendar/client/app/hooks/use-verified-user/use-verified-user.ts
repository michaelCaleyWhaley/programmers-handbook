import { getCookieValue } from "@/app/helpers/get-cookie";
import { useEffect, useState } from "react";

type userDataType = { login: string; avatar_url: string };

export function useVerifiedUser() {
  const [userData, setUserData] = useState<userDataType | null>(null);

  useEffect(() => {
    const userCookie = getCookieValue("user");
    if (!userCookie) {
      // @ts-expect-error redirect if not found
      window.location = "/";
      return;
    }

    const parsedJon = JSON.parse(userCookie) as unknown as userDataType;
    setUserData(parsedJon);
  }, []);

  return userData;
}
