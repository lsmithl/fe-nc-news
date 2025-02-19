export default function formatDate(date) {
  return date
    ? date.replaceAll("-", "/").split(/T|\./).slice(0, 2).join(" ").slice(0, -3)
    : null;
}
