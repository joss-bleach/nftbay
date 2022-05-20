export const shortName = (input) => {
  if (input.length > 15) {
    return input.substring(0, 15) + "...";
  }
  return input;
};
