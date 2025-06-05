export const getPetAge = (date: string | Date | undefined): string => {
  if (!date) return '0';

  const now = new Date();
  const past = new Date(date);
  const diffInMs = now.getTime() - past.getTime();

  const msInMonth = 1000 * 60 * 60 * 24 * 30.44;
  const msInYear = msInMonth * 12;

  const diffInYears = Math.floor(diffInMs / msInYear);
  const diffInMonths = Math.floor(diffInMs / msInMonth);

  if (diffInYears >= 1) return `${diffInYears}y`;
  return `${diffInMonths}m`;
};
