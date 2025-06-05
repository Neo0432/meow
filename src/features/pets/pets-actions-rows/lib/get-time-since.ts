export function getTimeSince(date: string | Date | undefined): string {
  if (!date) return '0';
  const now = new Date();
  const diffInMs = now.getTime() - new Date(date).getTime();
  const time = diffInMs / (1000 * 60 * 60);
  if (+time < 1) return (time * 60).toFixed() + 'm';
  else return time.toFixed() + 'h';
}
