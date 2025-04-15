export function getHoursSince(date: string | undefined): string {
  if (!date) return '0';
  const now = new Date();
  const diffInMs = now.getTime() - new Date(date).getTime();
  return (diffInMs / (1000 * 60 * 60)).toFixed();
}
