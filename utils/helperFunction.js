export function addCommasToNumber(number) {

  const numStr = number?.toString();
  const parts = numStr?.split(".");
  parts[0] = parts?.[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts?.join(".");

}
