import dayjs from 'dayjs';

export const prettierDate = (selectedDate: string) => {
  const showDate = dayjs.utc(selectedDate).local().format('DD.MM.YYYY');

  if (Number.isNaN(showDate) || showDate == 'Invalid Date') {
    return;
  } else return showDate;
};
