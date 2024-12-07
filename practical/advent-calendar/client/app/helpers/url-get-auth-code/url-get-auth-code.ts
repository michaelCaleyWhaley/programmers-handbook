export function urlGetAuthCode() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get("code");
}
