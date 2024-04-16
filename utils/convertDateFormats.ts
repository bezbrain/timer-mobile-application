// DATE IN THE FORMAT e.g. Apr 9, 2024
export const formatDate = () => {
  const date = new Date();

  // Array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Array of day names
  const daysNames = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const dayName = daysNames[date.getDay()].toUpperCase();

  // Get the month name from the array based on the month index (0-indexed)
  const month = monthNames[date.getMonth()].toUpperCase();

  // Get the day and pad it with leading zero if necessary
  const day = String(date.getDate()).padStart(2, "0");

  // Get the year
  const year = date.getFullYear();

  // Assemble the formatted date string
  const formattedDate = `${dayName}, ${month} ${day}, ${year}`;

  return formattedDate;
};
