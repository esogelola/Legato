export function truncateString(str: string, num: number): string {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
export function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
