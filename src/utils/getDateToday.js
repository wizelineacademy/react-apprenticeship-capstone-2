export const getDateToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 9 ? +date.getMonth() + 1 : '' + date.getMonth() + 1;

  const day = date.getDate() > 9 ? +date.getDate() : '' + date.getDate();

  return `${year}-${month}-${day}`;
};
