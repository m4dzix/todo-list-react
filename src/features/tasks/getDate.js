export const newDate = () => {
  return new Date().toLocaleDateString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
