import { convertUnixToDate } from "./convertUnixToDate";

export const getTime = (unixTimestamp: number) => {
  const date = convertUnixToDate(unixTimestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  `${hours}:${minutes}`;

  return `${hours}:${minutes}`;
};
