"use client";

import { errorRedirect } from "@/app/helpers/error-redirect";
import { urlGetAuthCode } from "@/app/helpers/url-get-auth-code";
import { useEffect } from "react";

type responseJson = { message: string };

async function getAuthorisationCookie(code: string) {
  const response = await fetch(`/api/gh-oauth?code=${code}`);
  if (!response.ok) {
    errorRedirect();
    return;
  }

  const json = (await response.json()) as responseJson;
  if (!json.message) {
    errorRedirect();
    return;
  }

  const userResponse = await fetch("/api/gh-user", { method: "POST" });
  if (!userResponse.ok) {
    errorRedirect();
    return;
  }

  // @ts-expect-error rewrite location
  window.location = "/advent-calendar";
}

export function useCodeSubmit() {
  useEffect(() => {
    const code = urlGetAuthCode();
    if (!code) {
      errorRedirect();
      return;
    }

    void getAuthorisationCookie(code);
  }, []);
}
