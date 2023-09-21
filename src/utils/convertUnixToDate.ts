export const convertUnixToDate = (unixTimestamp: number) =>
  new Date(unixTimestamp * 1000);
