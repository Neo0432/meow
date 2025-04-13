export function getHoursSince(date: Date | undefined): string {
  if (!date) return '0';
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  return (diffInMs / (1000 * 60 * 60)).toFixed();
}
