export function errorRedirect() {
  // @ts-expect-error rewrite location
  window.location = "/";
}
