export function CalculateAge(date) {
  let formattedDate = date.split("-");
  let birthdateTimeStamp = new Date(formattedDate[0], formattedDate[1], formattedDate[2]);
  let currentDate = new Date().getTime();
  let difference = currentDate - birthdateTimeStamp;
  let currentAge = Math.floor(difference / 31557600000);
  return currentAge;
}

export const SortErrors = errors => {
  const data = errors.reduce((acc, error) => {
    return {
      ...acc,
      [error.path]: error.msg
    };
  }, {});

  return data;
};
